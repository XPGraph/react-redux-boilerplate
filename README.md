# Reactjs Boilerplate Redux

React App with tools and settings

## Quick start

Choose one of the following options:

- Clone the git repo — `git clone https://github.com/XPGraph/react-redux-boilerplate`

* Install with [npm] `npm install`
* Start with [npm] `npm start`

- Install with [yarn] `yarn install`
- Start with [yarn] `yarn start`

## Features

- Redux ready for work
- Configured eslint
- Includes:
  - [`lodash`](https://lodash.com)
    The Lodash library exported as a UMD module.
  - [`React Router v4`](https://github.com/ReactTraining/react-router/tree/master/packages/react-router) Declarative routing for React.
  - [`Redux LocalStorage`](https://github.com/elgerlambert/redux-localstorage)
    Store enhancer that syncs (a subset) of your Redux store state to localstorage.
  - [`Redux Thunk`](https://github.com/reduxjs/redux-thunk)
    Thunk middleware for Redux.
  - [`Reselect`](https://github.com/reduxjs/reselect) Simple “selector” library for Redux (and others) inspired by getters in NuclearJS, subscriptions in re-frame and this proposal from speedskater.
- Custom utils createActions & createReducers & createArraySelector

Create action:

```sh
const setToken = createAction('SET_TOKEN', 'token');
```

Create Reducer:

```sh
export const authReducer = createReducer({}, {
  [setToken]: (state, {token}) => token
});
```

Create Array selector:

```sh
store = {
    ids: [],
    entities: {}
}

const array = createArraySelector('store');
```

## License

The code is available under the [MIT license](LICENSE).
