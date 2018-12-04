export function createAction (type, ...fields) {
  function actionCreator (...args) {
    if (process.env.NODE_ENV !== 'production') {
      if (fields.length > args.length) {
        // console.error(
        //   'Trying to create action ' +
        //   'with invalid number of parameters. ' +
        //   `Expected: ${fields.length}, got ${args.length}.` +
        //   ` Action type = ${type}`
        // )
      }
    }

    return {
      type,
      ...args.reduce((payload, arg, i) => {
        const property = i in fields ? fields[i] : 'payload';

        return {
          ...payload,
          [property]: args[i],
        };
      }, {}),
    };
  }

  actionCreator.toString = () => type;

  return actionCreator;
}
