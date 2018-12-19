export const NEWS_REQUEST = 'news/NEWS_REQUEST';
export const NEWS_SUCCEEDED = 'news/NEWS_SUCCEEDED';
export const NEWS_FAILED = 'news/NEWS_FAILED';

export function getNews() {
  return { type: NEWS_REQUEST };
}