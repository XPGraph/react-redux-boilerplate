import { createSelector } from 'reselect';

export const createArraySelector = (key) => createSelector(
  (state) => state[key].ids,
  (state) => state[key].entities,
  (ids, entities) => ids.map(id => entities[id]).filter((entitie) => entitie)
);
