import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as serviceWorker from './serviceWorker';

import App from './modules/app';
import reducer from './reducers';
import saga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

sagaMiddleware.run(saga);
serviceWorker.register();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
