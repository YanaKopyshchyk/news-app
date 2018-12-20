import {
  NEWS_REQUEST,
  NEWS_SUCCEEDED,
  NEWS_FAILED,
  SET_TAG,
} from '../actions/news';

const initialState = {
  data: {},
  tag: 'astrophysics',
  isFetching: false,
};

export default function news(state = initialState, action) {
  switch(action.type) {
    case NEWS_REQUEST:
      return { ...state, isFetching: true };
    case NEWS_SUCCEEDED:
      return {
        ...state,
        isFetching: false,
        data: {
          ...state.data,
          [state.tag]: action.payload,
        },
      };
    case NEWS_FAILED:
      return { ...state, isFetching: false };

    case SET_TAG:
      return { ...state, tag: action.payload };

    default:
      return { ...state };
  }
}
