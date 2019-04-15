
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({ basename: baseUrl });


const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    
      <App />
   
  </Provider>,
  rootElement);

registerServiceWorker();
