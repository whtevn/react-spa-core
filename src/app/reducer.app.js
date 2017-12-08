import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

import { Reducer as NavigationReducer, initialState as navigationState } from '../modules/navigation/reducer.navigation';
import { Reducer as PanelReducer, initialState as panelState } from '../modules/panel/reducer.panel';

export const initialState = fromJS({
  navigation: navigationState,
  panel: panelState,
});

const AppReducer = combineReducers({
	navigation: NavigationReducer,
	panel: PanelReducer,
});

export default AppReducer;

