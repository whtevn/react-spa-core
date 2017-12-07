import { fromJS, List, Map } from 'immutable';
import * as Actions from './actions.navigation';

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
    case Actions.RENDER:
      return state
        .setIn(["data", "panel", action.payload.name], fromJS({
          route: action.payload.route,
          params: action.payload.params,
        }));
    default:
      return state;
  }
}

