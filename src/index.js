import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/dark.css';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';


import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();