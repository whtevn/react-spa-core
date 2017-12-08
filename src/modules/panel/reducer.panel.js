import { fromJS, List, Map } from 'immutable';
import * as Actions from './actions.panel';

export const initialState = fromJS({
  data: {
  }
})

export const Reducer = (state, action) => {
  let payload;
  switch (action.type) {
    case Actions.RENDER:
      return state
        .setIn(["data", action.payload.name], fromJS(action.payload));
    default:
      return state;
  }
}

export const panelChanged = ({ current, found }) => !current || !current.equals(fromJS(found))

