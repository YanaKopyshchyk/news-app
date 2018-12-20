const API_KEY = 'language=en&apiKey=f6fcffddc709424fbfaaba82ca58990f';
const BASE_URL = 'https://newsapi.org/v2/everything?';

export async function getNewsApi(tag) {
  const THEME = `q=${tag || 'astrophysics'}&`;
  const jsonData = await fetch(`${BASE_URL}${THEME}${API_KEY}`);
  const response = await jsonData.json();
  const result = {};

  if (response.status === 'ok') {
    result.data = response.articles;
  }

  if (response.status === 'error') {
    result.error = response.message;
  }

  return result;
}
