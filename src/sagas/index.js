import { take, call, put, takeEvery, all, select } from 'redux-saga/effects';
import { getNewsApi } from '../services/api';
import {
  NEWS_REQUEST,
  NEWS_SUCCEEDED,
  NEWS_FAILED,
  SET_TAG,
} from '../actions/news';

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

export default function* saga() {
  yield all([
    watchNewsRequest(),
    watchTagChange(),
  ]);
}
