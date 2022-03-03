import { GET_SKILL } from "../types/skillTypes"

export const skillReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case GET_SKILL:
      return payload
    default:
       return state
  }
}
