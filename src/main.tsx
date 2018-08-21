import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { App } from 'app';
import stores from './app/stores' 
import 'bootstrap/dist/css/bootstrap.min.css';

const history = createBrowserHistory();


ReactDOM.render(
  <Provider store={stores}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
