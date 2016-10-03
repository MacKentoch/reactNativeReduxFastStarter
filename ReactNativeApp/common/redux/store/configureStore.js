'use strict';

import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
}                         from 'redux';
import thunkMiddleware    from 'redux-thunk';
import createLogger       from 'redux-logger';
import * as reducers      from '../modules/reducers';

// create logger:
const loggerMiddleware = createLogger({
  level     : 'info',
  collapsed : true
});

let enhancer;
if (process.env.NODE_ENV === 'development') {
  console.log('DEV: ', process.env.NODE_ENV);
  // createStore : enhancer development
  enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware // logger after thunk to avoid undefined actions
    )
  );
} else {
  console.log('NOT DEV: ', process.env.NODE_ENV);
  // createStore : enhancer production or not dev
  enhancer = compose(
    applyMiddleware(
      thunkMiddleware
    )
  );
}

// combine reducers
const reducer = combineReducers({
  ...reducers
});

export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer);
}
