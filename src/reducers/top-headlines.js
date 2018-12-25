import {
  TOP_HEADLINES_REQUEST,
  TOP_HEADLINES_SUCCEEDED,
  TOP_HEADLINES_FAILED,
} from '../actions/top-headlines';

const initialState = {
  data: [],
  isFetching: false,
};

export default function topHeadlines(state = initialState, action) {
  switch (action.type) {
    case TOP_HEADLINES_REQUEST:
      return { ...state, isFetching: true };
    case TOP_HEADLINES_SUCCEEDED:
      return { ...state, isFetching: false, data: action.payload.data };
    case TOP_HEADLINES_FAILED:
      return { ...state, isFetching: false };

    default:
      return { ...state };
  }
}
