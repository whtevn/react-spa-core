import React from 'react';
import ReactDOM  from 'react-dom';
import thunk from 'redux-thunk';
import { HashRouter as Router, Route } from 'react-router-dom'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer, { initialState } from './reducer.app';

import { List, Map } from 'immutable'
import AppElement from './container.app';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
	initialState,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppElement></AppElement>
    </Router>
	</Provider>,
  document.getElementById('app-container')
);


