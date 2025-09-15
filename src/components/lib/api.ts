const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export type SubscriptionData = {
  fullerName: string;
  phone: string;
  areaOfInterest: string;
  enterpriseId: number;
};

// Tipo para o payload do JWT
interface JwtPayload {
  exp?: number;
  iat?: number;
  [key: string]: unknown; // permite campos extras do token
}

// Função para decodificar o payload do JWT
function decodeJwt(token: string): JwtPayload | null {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(base64)) as JwtPayload;
  } catch {
    return null;
  }
}

// Pega token com clientId e clientSecret
export async function refreshToken(): Promise<string> {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Falha ao gerar token.");
  }

  const data: { token: string } = await response.json();
  const token = data.token;

  // decodifica e pega exp do token
  const decoded = decodeJwt(token);
  const expiry = decoded?.exp ? decoded.exp * 1000 : Date.now();

  localStorage.setItem("apiToken", token);
  localStorage.setItem("tokenExpiry", expiry.toString());

  return token;
}

// Retorna token válido
export async function getToken(): Promise<string> {
  const token = localStorage.getItem("apiToken");
  const expiry = Number(localStorage.getItem("tokenExpiry") || 0);

  if (!token || Date.now() > expiry) {
    return await refreshToken();
  }

  return token;
}

// Envia dados do formulário para a API
export async function submitSubscription(
  subscriptionData: SubscriptionData
): Promise<object> {
  const token = await getToken(); // garante token válido

  const response = await fetch(`${API_BASE_URL}/subscriptions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(subscriptionData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Falha ao enviar inscrição.");
  }

  return await response.json();
} 