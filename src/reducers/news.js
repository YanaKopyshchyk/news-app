import {
  NEWS_REQUEST,
  NEWS_SUCCEEDED,
  NEWS_FAILED,
} from '../actions/news';

const initialState = {
  data: [],
  isFetching: false,
};

export default function news(state = initialState, action) {
  switch(action.type) {
    case NEWS_REQUEST:
      return { ...state, isFetching: true };
    case NEWS_SUCCEEDED:
      return { ...state, isFetching: false, data: action.payload };
    case NEWS_FAILED:
      return { ...state, isFetching: false };

    default:
      return { ...state };
  }
}