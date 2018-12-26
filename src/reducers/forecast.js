import {
  FORECAST_REQUEST,
  FORECAST_SUCCEEDED,
  FORECAST_FAILED,
} from '../actions/forecast';

const initialState = {
  isFetching: false,
};

export default function forecast(state = initialState, action) {
  switch (action.type) {
    case FORECAST_REQUEST:
      return { ...state, isFetching: true };
    case FORECAST_SUCCEEDED:
      return { ...state, isFetching: false, ...action.payload };
    case FORECAST_FAILED:
      return { ...state, isFetching: false };

    default:
      return { ...state };
  }
}
