import { call, put, takeEvery } from 'redux-saga/effects';
import { getNewsApi } from '../services/api';
import {
  NEWS_REQUEST,
  NEWS_SUCCEEDED,
  NEWS_FAILED,
} from '../actions/news';

function* fetchNews() {
  const { data, error } = yield call(getNewsApi);

  if (data) {
    yield put({ type: NEWS_SUCCEEDED, payload: data });
  }

  if (error) {
    yield put({ type: NEWS_FAILED, payload: error });
  }
}

export default function* saga() {
  yield takeEvery(NEWS_REQUEST, fetchNews);
}
