/* eslint no-unused-vars: 0 */
/* eslint no-undef: 0 */

import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';

export const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState) {
  const middleWares = [sagaMiddleware];
  const enhancer = compose(applyMiddleware(...middleWares));

  const Store = createStore(reducers, initialState, enhancer);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers').default;
      Store.replaceReducer(nextRootReducer);
    });
  }

  return Store;
}

// passing true here for enabling redux logger
export const store = configureStore({}, true);
