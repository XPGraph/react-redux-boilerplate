export function createReducer (initialState, handlers) {
  if (process.env.NODE_ENV !== 'production') {
    for (const type in handlers) {
      if (typeof handlers[type] !== 'function') {
        // console.error(
        //   `Wrong action type (${type}) in reducer` +
        //   ` descriptor: ${JSON.stringify(handlers)}`
        // )
      }
    }

    for (const type in handlers) {
      const handler = handlers[type];

      if (handler.name === '') {
        Object.defineProperty(
          handler,
          'name',
          { value: `${type} Reducer` },
        );
      }
    }
  }

  return function reducer (state = initialState, action) {
    const handler = handlers[action.type];

    if (process.env.NODE_ENV === 'production') {
      return typeof handler === 'function'
        ? handler(state, action)
        : state;
    }

    const reducedState = typeof handler === 'function'
      ? handler(state, action)
      : state;

    if (reducedState === undefined) {
      // debugger
      // console.error(
      //   `Reducer with descriptor ${JSON.stringify(handlers)}` +
      //   ` returned undefined for action ${JSON.stringify(action)}`
      // )
    }

    return reducedState;
  };
}
