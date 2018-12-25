import { take, call, put, takeEvery, all, select } from 'redux-saga/effects';
import { getNewsApi, getTopHeadlinesApi } from '../services/api';
import {
  NEWS_REQUEST,
  NEWS_SUCCEEDED,
  NEWS_FAILED,
  SET_TAG,
} from '../actions/news';
import {
  TOP_HEADLINES_REQUEST,
  TOP_HEADLINES_SUCCEEDED,
  TOP_HEADLINES_FAILED,
} from '../actions/top-headlines';

function* fetchNews(action) {
  const { tag, page } = action.payload;
  const { data, total, error } = yield call(getNewsApi, tag, page);

  if (data) {
    yield put({ type: NEWS_SUCCEEDED, payload: { data, total } });
  }

  if (error) {
    yield put({ type: NEWS_FAILED, payload: error });
  }
}

function* fetchTopHeadlines() {
  const { data, error } = yield call(getTopHeadlinesApi);

  if (data) {
    yield put({ type: TOP_HEADLINES_SUCCEEDED, payload: { data } });
  }

  if (error) {
    yield put({ type: TOP_HEADLINES_FAILED, payload: error });
  }
}

function* watchTagChange() {
  while (true) {
    const action = yield take(SET_TAG);
    const state = yield select();
    const tag = action.payload;

    if (!state.news.data[tag]) {
      yield put({ type: NEWS_REQUEST, payload: { tag } });
    }
  }
}

function* watchNewsRequest() {
  yield takeEvery(NEWS_REQUEST, fetchNews);
}

function* watchTopHeadlinesRequest() {
  yield takeEvery(TOP_HEADLINES_REQUEST, fetchTopHeadlines);
}

export default function* saga() {
  yield all([
    watchNewsRequest(),
    watchTagChange(),
    watchTopHeadlinesRequest(),
  ]);
}
