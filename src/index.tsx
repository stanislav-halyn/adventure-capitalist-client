// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

// Components
import App from './app';

// Store
import { configureStore } from './store';


const store = configureStore();


ReactDOM.render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
