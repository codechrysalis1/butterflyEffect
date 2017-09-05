import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';

import './components/styles/index.css';
import App from './components/App';

import reducer from './reducer';

const store = createStore(reducer);

console.log(
  'hello world',
);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={App} />
    </BrowserRouter>
  </Provider>, document.getElementById('root'),
);
