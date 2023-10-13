export default async function fetchApi(params) {
  const apiUrl = 'http://servicodados.ibge.gov.br/api/v3/noticias/';
  const queryParams = new URLSearchParams(params);

  try {
    const response = await fetch(`${apiUrl}?${queryParams}`);
    const data = await response.json();

    if (response.ok) {
      return { data, error: null };
    } else {
      return { data: null, error: data.message || 'Erro desconhecido na API' };
    }
  } catch (error) {
    return { data: null, error: `Erro na requisição: ${error.message}` };
  }
}
