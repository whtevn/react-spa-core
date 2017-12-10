import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

import { StateManager as LayoutStateManager } from 'layoutSpaCore';
import { StateManager as RouterStateManager } from 'routerSpaCore';
import { Reducer as ModalReducer, initialState as modalState } from '../modules/modal/reducer.modal';

export const initialState = fromJS({
  navigation: LayoutStateManager.initialState,
  panel: RouterStateManager.initialState,
  modal: modalState,
});

const AppReducer = combineReducers({
	navigation: LayoutStateManager.Reducer,
	panel: RouterStateManager.Reducer,
	modal: ModalReducer,
});

export default AppReducer;

