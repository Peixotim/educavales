// Definimos um tipo para os dados que o formulário enviará
type SubscriptionData = {
  fullName: string;
  email: string;
  whatsapp: string;
  interestArea: string;
};

export async function submitSubscription2(data: SubscriptionData) {

  // Mudar o end point da api depois
  const API_ENDPOINT = '/api/subscribe'; //Api

  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Se a resposta da API não for de sucesso (ex: erro 500, 400), lança um erro
    if (!response.ok) {
      throw new Error('Houve um problema ao enviar seus dados.');
    }

    // Se deu tudo certo, retorna a resposta
    return await response.json();

  } catch (error) {
    console.error('Falha ao conectar com a API:', error);
    // Lança o erro novamente para que o componente possa tratá-lo
    throw error;
  }
}