import { CREATE_STARTUP, GET_ALL_POST, CHANGE_STATUS, DELETE_ONE_POST, GET_POSTS } from '../types/allTypes'
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

      
      case CHANGE_STATUS:
        return state.map((el) => {
          if(el.id === action.payload) {
            return {
              ...el,
              status: !el.status
            }
          }
          return el
        })
        case DELETE_ONE_POST:
          return state.filter((el) => el.id !== action.payload)
          
          case GET_POSTS:
            return action.payload

    default:
      return state
  }
}

export default startupReducer
