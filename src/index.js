// instruments
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
// style
import './index.css';
// app
import { App } from  './app/index';
// store
import { store } from './app/init/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
);
reportWebVitals();
