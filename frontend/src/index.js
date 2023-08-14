import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import configureStore from './store';

const root = ReactDOM.createRoot(document.getElementById('root'))

let initialState = {}
const store = configureStore(initialState);

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
}

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
