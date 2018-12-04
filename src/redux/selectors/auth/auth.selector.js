import { createSelector } from 'reselect';

const _getToken = (state) => state.token;

export const getToken = createSelector(
  [_getToken],
  token => token
);
