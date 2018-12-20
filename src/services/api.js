const API_KEY = 'language=en&apiKey=f6fcffddc709424fbfaaba82ca58990f';
const BASE_URL = 'https://newsapi.org/v2/everything?';
const COSMOLOGY_THEME = `q=
  "cosmic microwave background"&
  "big bang"&
  "quantum physics"&
  "theoretical physics"&
  "astrophysics"&
  "space-Time"&
  "gravity"&
  "astronomy"&
  "gravitational waves"&
  "multiverse"&
  "string theory"&
  "dark energy"&
  "dark matter"&
  "dark fluid"&
  "elementary particles"&
  "CERN"&
  "black holes"&
  "milky way"&
`;

export async function getNewsApi() {
  const jsonData = await fetch(`${BASE_URL}${COSMOLOGY_THEME}${API_KEY}`);
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
