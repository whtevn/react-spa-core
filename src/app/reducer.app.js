import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

import { Reducer as NavigationReducer, initialState as navigationState } from '../modules/layout/reducer';
import { Reducer as PanelReducer, initialState as panelState } from '../modules/router/reducer';
import { Reducer as ModalReducer, initialState as modalState } from '../modules/modal/reducer.modal';

export const initialState = fromJS({
  navigation: navigationState,
  panel: panelState,
  modal: modalState,
});

const AppReducer = combineReducers({
	navigation: NavigationReducer,
	panel: PanelReducer,
	modal: ModalReducer,
});

export default AppReducer;

