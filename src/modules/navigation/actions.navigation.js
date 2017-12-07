import fetch from '../../assets/lib/fetch';

const Type = "Navigation";

export const TOGGLE_MENU = `${Type} TOGGLE_MENU`;
export const ToggleMenu = ( payload ) => {
  return {
    type: TOGGLE_MENU,
    payload
  }
}


export const SHOW_MENU = `${Type} SHOW_MENU`;
export const ShowMenu = ( payload ) => {
  return {
    type: SHOW_MENU,
    payload
  }
}

export const HIDE_MENU = `${Type} HIDE_MENU`;
export const HideMenu = ( payload ) => {
  return {
    type: HIDE_MENU,
    payload
  }
}

export const SET_LOCATION = `${Type} SET_LOCATION`;
export const SetLocation = ( payload ) => {
  return {
    type: SET_LOCATION,
    payload
  }
}
export function NavigateTo( payload ) {
  return (dispatch, getState) => {
    dispatch(SetLocation(payload));
    window.location = `#${payload}`;
  }
}
