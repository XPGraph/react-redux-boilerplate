const prefix = 'BATCH';

export const batch = (store) => (next) => (action) =>
  Array.isArray(action)
    ? store.dispatch({
      type: `${prefix} [${action.map(action => action.type).join(', ')}]`,
      payload: action,
    })
    : next(action);

export const enableBatch = (reducer) => (state, action) =>
  action.type.startsWith(prefix)
    ? action.payload.reduce(reducer, state)
    : reducer(state, action);
