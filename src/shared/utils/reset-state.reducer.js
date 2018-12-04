import { initState } from 'redux/init-state';

export const resetStateReducer = (reducer) => (state, action) =>
  action.type === 'RESET_STATE'
    ? initState
    : reducer(state, action);
