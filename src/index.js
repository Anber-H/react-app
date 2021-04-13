import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';
import './mock';
import './common/style/frame.scss';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
ReactDOM.render(
  <Router>
    <Route>
      <Provider store={store}>
        <App/>
      </Provider>
    </Route>
  </Router>
  , document.getElementById('root'));
serviceWorker.unregister();
