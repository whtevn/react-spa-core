import { fromJS, List, Map } from 'immutable';
import * as Actions from './actions.modal';

export const initialState = fromJS({
  state: {
    hidden: true,
  },
  data: {
    location: undefined,
  }
})

export const Reducer = (state, action) => {
  let payload;
  switch (action.type) {
    case Actions.SHOW:
      return state
        .setIn(["state", "hidden"], false);
    case Actions.GOTO:
      return state
        .setIn(["data", "location"], action.payload);
    case Actions.OPEN:
      return state
        .setIn(["state", "hidden"], false)
        .setIn(["data", "location"], action.payload);
    case Actions.CLOSE:
      return state
        .setIn(["state", "hidden"], true)
        .setIn(["data", "location"], undefined);
    case Actions.HIDE:
      return state
        .setIn(["state", "hidden"], true);
    case Actions.TOGGLE:
      return state
        .setIn(["state", "hidden"], !state.getIn(["state", "hidden"]));
    default:
      return state;
  }
}
