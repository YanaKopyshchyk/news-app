import { combineReducers } from 'redux';

import news from './news';
import topHeadlines from './top-headlines';

const reducer = combineReducers({
  news,
  topHeadlines,
});

export default reducer;
