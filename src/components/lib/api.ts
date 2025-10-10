const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

export type SubscriptionData = {
  name: string;
  phone: string;           // já normalizado (só dígitos, com 55 se quiser)
  areaOfInterest: string;
  enterpriseId: number;
};

/* Tipos possíveis de resposta */
type LoginResponse = {
  status?: string;
  statusCode?: number;
  message?: string;
  error?: string;
  authToken?: { token: string }; // sua API normalmente manda isso
  token?: string;                // fallback
};

type LeadResponse = {
  message?: string;
  error?: string;
  [key: string]: unknown;
};

/* ===== Utils token ===== */
const TOKEN_KEY = "apiToken";
const EXP_KEY = "apiTokenExpiryMs";
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;
const SKEW_MS = 60_000; // renova 1 min antes
const isBrowser = typeof window !== "undefined";

let memToken: string | null = null;
let memExpiry = 0;

function saveToken(token: string, now = Date.now()): void {
  const expiryMs = now + THIRTY_DAYS_MS;
  if (isBrowser) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(EXP_KEY, String(expiryMs));
  } else {
    memToken = token;
    memExpiry = expiryMs;
  }
}

function readToken(): { token: string | null; expiry: number } {
  if (isBrowser) {
    return {
      token: localStorage.getItem(TOKEN_KEY),
      expiry: Number(localStorage.getItem(EXP_KEY) || 0),
    };
  }
  return { token: memToken, expiry: memExpiry };
}

function clearToken(): void {
  if (isBrowser) {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(EXP_KEY);
  } else {
    memToken = null;
    memExpiry = 0;
  }
}

async function safeJson<T>(res: Response): Promise<T | null> {
  try {
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

/* ===== Login ===== */
async function loginAndCache(): Promise<string> {
  const email = process.env.NEXT_PUBLIC_CLIENT_ID;
  const password = process.env.NEXT_PUBLIC_CLIENT_SECRET;

  if (!email || !password) {
    throw new Error(
      "Env ausente: NEXT_PUBLIC_CLIENT_ID / NEXT_PUBLIC_CLIENT_SECRET"
    );
  }

  const res = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = (await safeJson<LoginResponse>(res)) ?? {};
  const token = data.authToken?.token ?? data.token;

  if (!res.ok || !token) {
    throw new Error(data.message || `Falha no login (status ${res.status}).`);
  }

  saveToken(token);
  return token;
}

let inFlightLogin: Promise<string> | null = null;

/* ===== Token válido (auto-renova) ===== */
export async function getToken(): Promise<string> {
  const { token, expiry } = readToken();
  const now = Date.now();

  if (!token || now + SKEW_MS >= expiry) {
    if (!inFlightLogin) {
      inFlightLogin = loginAndCache().finally(() => {
        inFlightLogin = null;
      });
    }
    return inFlightLogin;
  }
  return token;
}

/* ===== Enviar lead ===== */
export async function submitSubscription(
  subscriptionData: SubscriptionData
): Promise<LeadResponse> {
  let token = await getToken();

  // 1️⃣ Envia normalmente para sua API principal
  let res = await fetch(`${API_BASE_URL}/leads/criar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(subscriptionData),
  });

  // Se o token expirou, renova e tenta novamente
  if (res.status === 401 || res.status === 403) {
    clearToken();
    token = await getToken();
    res = await fetch(`${API_BASE_URL}/leads/criar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(subscriptionData),
    });
  }

  const data = (await safeJson<LeadResponse>(res)) ?? {};
  if (!res.ok) {
    throw new Error(
      data.message ||
        data.error ||
        `Falha ao criar lead (status ${res.status}).`
    );
  }

  // 2️⃣ Envia cópia para o Webhook do tráfego (Google Apps Script)
  const webhookURL =
    "https://script.google.com/macros/s/AKfycbxn83XpnztrO2VElP5KNK_JFn0lgKbjTbSlwThQo24gkqHkOtkx6v7MPC-L7AKoFQ9rwg/exec";

  try {
    await fetch(webhookURL, {
      method: "POST",
      mode: "no-cors", // evita bloqueio CORS
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subscriptionData),
    });

    console.log("Webhook enviado com sucesso:", subscriptionData);
  } catch (err) {
    console.warn("Falha ao enviar para o webhook:", err);
    // não lança erro — apenas loga, para não impactar o front
  }

  // 3️⃣ Retorna normalmente o resultado da sua API
  return data;
}

/* ===== Helpers ===== */
function onlyDigits(v: string): string {
  return (v || "").replace(/\D/g, "");
}

export function normalizePhone(raw: string): string {
  const d = onlyDigits(raw);
  if (!d) return "";
  // opcional: prefixar 55
  return d.startsWith("55") ? d : `55${d}`;
}

export function toSafeNumber(value: unknown, fallback = 1): number {
  const n = Number(value);
  return Number.isFinite(n) && !Number.isNaN(n) ? n : fallback;
}

export function buildSubscriptionFromForm(
  form: HTMLFormElement
): SubscriptionData {
  const fd = new FormData(form);
  const name = ((fd.get("name") as string) || "").trim();
  const areaOfInterest = ((fd.get("interestArea") as string) || "").trim();
  const phone = normalizePhone((fd.get("whatsapp") as string) || "");
  const enterpriseId = toSafeNumber(process.env.NEXT_PUBLIC_ENTERPRISE_ID);
  return { name, areaOfInterest, phone, enterpriseId };
}