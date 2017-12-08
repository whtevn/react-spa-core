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
import * as navigationActions from '../modules/navigation/actions.navigation';
const initialLocation = window.location.hash?window.location.hash.replace("#", ""):"/"
store.dispatch(navigationActions.NavigateTo(initialLocation))
window.onhashchange = function() {
  if(window.location.hash.match("#"))
    store.dispatch(navigationActions.NavigateTo( window.location.hash.replace("#", "")))
}
/* end panel rendering setup */

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppElement></AppElement>
    </Router>
	</Provider>,
  document.getElementById('app-container')
);


