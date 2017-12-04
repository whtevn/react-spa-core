import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

// import { Reducer as ReplyFormReducer, initialState as replyFormState } from '../../modules/name/reducer.name';

export const initialState = fromJS({
  //name: nameState,
});

const AppReducer = combineReducers({
	//name: NameReducer,
});

export default AppReducer;

