import React from 'react';
import { render } from 'react-dom';
import '../dist/style.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';

const root = document.createElement('div');
document.body.appendChild(root);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
