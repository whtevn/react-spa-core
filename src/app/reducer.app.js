import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

import { Reducer as NavigationReducer, initialState as navigationState } from '../modules/navigation/reducer.navigation';

export const initialState = fromJS({
  navigation: navigationState,
});

const AppReducer = combineReducers({
	navigation: NavigationReducer,
});

export default AppReducer;

