const KEY = 'apiKey=f6fcffddc709424fbfaaba82ca58990f';
const URL = 'https://newsapi.org/v2/everything?language=en&';

export async function getNewsApi(tag = 'astrophysics', page = 1, size = 10) {
  const theme = `q=${tag}&`;
  const pageSize = `pageSize=${size}&`;
  const pageNumber = `page=${page}&`;

  const jsonResponse = await fetch(`${URL}${theme}${pageSize}${pageNumber}${KEY}`);
  const response = await jsonResponse.json();

  if (response.status === 'ok') {
    return {
      data: response.articles,
      total: response.totalResults,
    };
  }

  if (response.status === 'error') {
    return { error: response.message };
  }
}
