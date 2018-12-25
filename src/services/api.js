const KEY = 'apiKey=f6fcffddc709424fbfaaba82ca58990f';
const URL_EVER = 'https://newsapi.org/v2/everything?language=en&sortBy=relevancy&';
const URL_TOP = 'https://newsapi.org/v2/top-headlines?category=science&country=us&';

export async function getNewsApi(tag = 'astrophysics', page = 1, size = 10) {
  const theme = `q=${tag}&`;
  const pageSize = `pageSize=${size}&`;
  const pageNumber = `page=${page}&`;

  const jsonResponse = await fetch(`${URL_EVER}${theme}${pageSize}${pageNumber}${KEY}`);
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
  const jsonResponse = await fetch(`${URL_TOP}pageSize=5&${KEY}`);
  const response = await jsonResponse.json();

  if (response.status === 'ok') {
    return {
      data: response.articles,
    };
  }

  if (response.status === 'error') {
    return { error: response.message };
  }
} 
