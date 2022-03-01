import { LOGOUT, SET_USER, SIGN_IN } from "../types/userTypes";

export const userReducer = (state = null, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_USER:
      return payload
    case SIGN_IN:
      return payload
      case LOGOUT:
        return state = null
  
    default:
       return state
  }
}
