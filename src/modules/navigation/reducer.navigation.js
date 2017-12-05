import { fromJS, List, Map } from 'immutable';
import * as Actions from './actions.navigation';

export const initialState = fromJS({
  state: {
  },
  data: {
  },
})

export const Reducer = (state, action) => {
  let payload;
  switch (action.type) {
    default:
      return state;
  }
}

