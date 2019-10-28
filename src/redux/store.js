import { createStore, applyMiddleware, compose } from 'redux';
import { initState } from './init-state';
import reducer from 'redux/reducers';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';
import { resetStateReducer, batch, enableBatch } from 'shared';

const isDevelopment = process.env.NODE_ENV === 'development';
const composeEnhancers = isDevelopment ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

const middlewares = [thunk, batch];

export const store = createStore(
  enableBatch(resetStateReducer(reducer)),
  initState,
  composeEnhancers(
    applyMiddleware(...middlewares),
    persistState(Object.keys(initState), {
      key: 'state',
      slicer: paths => state =>
        paths.reduce(
          (serialized, path) => ({
            ...serialized,
            [path]: state[path],
          }),
          {}
        ),
    })
  )
);
