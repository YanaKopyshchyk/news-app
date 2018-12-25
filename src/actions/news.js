export const NEWS_REQUEST = 'NEWS_REQUEST';
export const NEWS_SUCCEEDED = 'NEWS_SUCCEEDED';
export const NEWS_FAILED = 'NEWS_FAILED';

export const SET_TAG = 'SET_TAG';

export function getNews(tag, page = 1) {
  return { type: NEWS_REQUEST, payload: { tag, page } };
}

export function setTag(tag) {
  return { type: SET_TAG, payload: tag };
}
