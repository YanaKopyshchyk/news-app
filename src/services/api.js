const NEWS_KEY = 'apiKey=f6fcffddc709424fbfaaba82ca58990f';
const FORECAST_KEY = 'APPID=eb7ec9dd3aae9b9b8b503f9a8913f24a';

export async function getNewsApi(tag = 'astrophysics', page = 1, size = 10) {
  const url = 'https://newsapi.org/v2/everything?language=en&sortBy=relevancy&';
  const theme = `q=${tag}&`;
  const pageSize = `pageSize=${size}&`;
  const pageNumber = `page=${page}&`;

  const jsonResponse = await fetch(`${url}${theme}${pageSize}${pageNumber}${NEWS_KEY}`);
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

export async function getTopHeadlinesApi() {
  const url = 'https://newsapi.org/v2/top-headlines?category=science&country=us&';

  const jsonResponse = await fetch(`${url}pageSize=5&${NEWS_KEY}`);
  const response = await jsonResponse.json();

  if (response.status === 'ok') {
    return { data: response.articles };
  }

  if (response.status === 'error') {
    return { error: response.message };
  }
} 

export async function getForecastApi() {
  const url = 'http://api.openweathermap.org/data/2.5/forecast/daily?id=703448&units=metric&cnt=7&';

  const jsonReaponse = await fetch(`${url}${FORECAST_KEY}`);
  const response = await jsonReaponse.json();

  if (response.cod === '200') {
    return { data: response };
  } else {
    return { error: response.message };
  }
}
