const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

//Tipo de dados que a API vai receber
export type SubscriptionData = {
  name: string;
  phone: string;
  enterpriseId: number;
  areaOfInterest: string;
};

//Funcao de autenticacao de 30 em 30 dias

export async function refreshToken(): Promise<string> {
  try {
    if (!API_BASE_URL || !process.env.NEXT_PUBLIC_CLIENT_ID || !process.env.NEXT_PUBLIC_CLIENT_SECRET) {
      throw new Error("Variáveis de ambiente da API não configuradas. Verifique o .env.local");
    }
    const response = await fetch(`${API_BASE_URL}/trocarRota`, { //Trocar a rota depois
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Falha ao gerar token de acesso.");
    }
    const data = await response.json();
    localStorage.setItem("apiToken", data.token);
    localStorage.setItem("tokenExpiry", (Date.now() + 30 * 24 * 60 * 60 * 1000).toString());
    return data.token;
  } catch (error) {
    console.error("Erro em refreshToken:", error);
    throw error;
  }
}

export async function getToken(): Promise<string> {
  try {
    const token = localStorage.getItem("apiToken");
    const expiry = Number(localStorage.getItem("tokenExpiry") || 0);
    if (!token || Date.now() > expiry) {
      return await refreshToken();
    }
    return token;
  } catch (error) {
    console.error("Erro em getToken:", error);
    throw error;
  }
}

//Funcao de enviar

export async function submitSubscription2(data: SubscriptionData) {
  try {
    if (!API_BASE_URL) {
      throw new Error("A URL da API não está configurada. Verifique o arquivo .env.local");
    }
    const token = await getToken();
    const API_ENDPOINT = `${API_BASE_URL}/api/subscribe`; //Mudar o endPoint para o da API

    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Houve um problema ao enviar seus dados.');
    }
    return await response.json();
  } catch (error) {
    console.error('Falha ao conectar com a API:', error);
    throw error;
  }
}