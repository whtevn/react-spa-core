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

/* set up initial location for panel rendering */
import { Actions as navigationActions } from 'layoutSpaCore';
import { prepareBrowserHistory } from 'routerSpaCore';
prepareBrowserHistory(store, navigationActions);
/* end panel rendering setup */

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppElement></AppElement>
    </Router>
	</Provider>,
  document.getElementById('app-container')
);


