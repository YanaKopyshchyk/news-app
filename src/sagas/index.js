import { take, call, put, takeEvery, all, select } from 'redux-saga/effects';
import { getNewsApi } from '../services/api';
import {
  NEWS_REQUEST,
  NEWS_SUCCEEDED,
  NEWS_FAILED,
  SET_TAG,
} from '../actions/news';

function* fetchNews() {
  const state = yield select();
  const { data, error } = yield call(getNewsApi, state.news.tag);

  if (data) {
    yield put({ type: NEWS_SUCCEEDED, payload: data });
  }

  if (error) {
    yield put({ type: NEWS_FAILED, payload: error });
  }
}

function* watchTagChange() {
  while (true) {
    yield take(SET_TAG);

    const state = yield select();
    const { news: { tag, data } } = state;

    if (!data[tag]) {
      yield put({ type: NEWS_REQUEST });
    }
  }
}

function* watchNewsRequest() {
  yield takeEvery(NEWS_REQUEST, fetchNews);
}

export default function* saga() {
  yield all([
    watchNewsRequest(),
    watchTagChange(),
  ]);
}
