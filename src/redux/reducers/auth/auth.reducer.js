import { createReducer } from 'shared';
import { setToken, deleteToken } from 'redux/actions';

export const authReducer = createReducer({}, {
  [setToken]: (state, {token}) => token,
  [deleteToken]: () => null,
});
