const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Define o tipo de dados que esperamos enviar para a API.
 * Todos os campos do formulário são strings.
 */
type SubscriptionData = {
  fullerName: string;
  phone: string;
  areaOfInterest: string;
  course?: string;
};

/**
 * Função para enviar os dados de inscrição para a API.
 * @param {SubscriptionData} subscriptionData - Os dados do formulário.
 * @returns {Promise<object>} - A resposta da API em formato JSON.
 */
export async function submitSubscription(subscriptionData: SubscriptionData) {
  try {
    if (!API_BASE_URL) {
      throw new Error("A URL da API não está configurada. Verifique o arquivo .env.local"); //Se nao possui a NEXT_BASE_URL 
    }

    const endpoint = `${API_BASE_URL}/subscribe`; //Adicionar o endpoint da API
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subscriptionData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Falha ao enviar inscrição.");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro no serviço de API (submitSubscription):", error);
    throw error;
  }
}