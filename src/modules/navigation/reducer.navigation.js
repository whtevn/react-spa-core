import { fromJS, List, Map } from 'immutable';
import * as Actions from './actions.navigation';

export const initialState = fromJS({
  state: {
    hidden: true,
  },
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
    default:
      return state;
  }
}

