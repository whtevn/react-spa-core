const Type = "Modal";

export const SHOW = `${Type} SHOW`;
export const Show = ( payload ) => {
  return {
    type: SHOW,
    payload
  }
}

export const GOTO = `${Type} GOTO`;
export const Goto = ( payload ) => {
  return {
    type: GOTO,
    payload
  }
}

export const OPEN = `${Type} OPEN`;
export const Open = ( payload ) => {
  return {
    type: OPEN,
    payload
  }
}

export const CLOSE = `${Type} CLOSE`;
export const Close = ( payload ) => {
  return {
    type: CLOSE,
    payload
  }
}

export const HIDE = `${Type} HIDE`;
export const Hide = ( payload ) => {
  return {
    type: HIDE,
    payload
  }
}

export const TOGGLE = `${Type} TOGGLE`;
export const Toggle = ( payload ) => {
  return {
    type: TOGGLE,
    payload
  }
}
