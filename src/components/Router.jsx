import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';

import App from './App';
import Admin from './Admin';
import Track from './Track'

import './styles/index.css';

import reducer from '../reducer';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div id="router">
        <Route exact path="/" component={App} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/track" component={Track} />
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('root'),
);
