import {
  NEWS_REQUEST,
  NEWS_SUCCEEDED,
  NEWS_FAILED,
  SET_TAG,
} from '../actions/news';

const initialState = {
  data: {},
  isFetching: false,
  tag: 'astrophysics',
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
          [state.tag]: {
            total: action.payload.total,
            articles: updateArray(state.data[state.tag], action.payload.data),
          },
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

function updateArray(oldData, newArr) {
  return oldData ? [...oldData.articles, ...newArr] : newArr;
}
