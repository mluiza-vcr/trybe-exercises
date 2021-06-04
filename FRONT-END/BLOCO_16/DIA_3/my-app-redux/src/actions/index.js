export const ADD_INFO = "ADD_INFO";
export const CLEAR_INFO = "CLEAR_INFO";

export function addInfo(payload) {
  return ({
    type: ADD_INFO,
    payload,
  })
}

export function clearInfo() {
  return ({
    type: CLEAR_INFO,
  })
}

