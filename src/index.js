import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/app.scss';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import Routes from './app.routes';

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
