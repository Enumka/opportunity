import { SET_ROLES } from "../types/userTypes"

export const roleReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case SET_ROLES:
      return payload
  
  
    default:
       return state
  }
}
