'use strict';

import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
}                         from 'redux';
import thunkMiddleware    from 'redux-thunk';
import * as reducers      from '../reducers';

// createStore : enhancer
const enhancer = compose(
  applyMiddleware(thunkMiddleware)
);

// combine reducers
const reducer = combineReducers({
  ...reducers
});

export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer);
}
