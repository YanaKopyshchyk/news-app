import { combineReducers } from 'redux';

import news from './news';
import topHeadlines from './top-headlines';
import forecast from './forecast';

const reducer = combineReducers({
  news,
  topHeadlines,
  forecast,
});

export default reducer;
