import { fromJS, List, Map } from 'immutable';
import * as Actions from './actions.layout';

export const initialState = fromJS({
  state: {
    hidden: true,
  },
  data: {
    location: undefined,  // the current app resource
  }
})

export const Reducer = (state, action) => {
  let payload;
  switch (action.type) {
    case Actions.TOGGLE_MENU:
      let currentHiddenState = state.getIn(["state", "hidden"]);
      return state
        .setIn(["state", "hidden"], !currentHiddenState);
    case Actions.SHOW_MENU:
      return state
        .setIn(["state", "hidden"], false);
    case Actions.HIDE_MENU:
      return state
        .setIn(["state", "hidden"], true);
    case Actions.SET_LOCATION:
      return state
        .setIn(["state", "hidden"], true)
        .setIn(["data", "location"], action.payload);
    default:
      return state;
  }
}

export const compareState = (state, props) => state.equals(fromJS(props))
