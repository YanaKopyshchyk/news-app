const API_KEY = 'apiKey=f6fcffddc709424fbfaaba82ca58990f';
const BASE_URL = 'https://newsapi.org/v2/everything?';
const LANGUAGE = 'language=en&';

export async function getNewsApi(tag) {
  const THEME = `q=${tag || 'astrophysics'}&`;

  const jsonResponse = await fetch(`${BASE_URL}${THEME}${LANGUAGE}${API_KEY}`);
  const response = await jsonResponse.json();

  if (response.status === 'ok') {
    return { data: response.articles };
  }

  if (response.status === 'error') {
    return { error: response.message };
  }
}
