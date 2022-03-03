import { CREATE_STARTUP, GET_ALL_POST, } from '../types/allTypes'
import initState from '../initState'

const startupReducer = (state = initState, action) => {
  switch (action.type) {

    case CREATE_STARTUP:
      return [
        action.payload,
        ...state
      ]

    case GET_ALL_POST:
      return action.payload



    default:
      return state
  }
}

export default startupReducer
