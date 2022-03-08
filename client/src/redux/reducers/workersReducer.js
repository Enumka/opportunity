import { GET_ALL_WORKERS, CHANGE_USERSTATUS, DELETE_ONE_WORKER} from '../types/allTypes'
import initState from '../initState'
import { PUT_USER_PROFILE } from '../types/userTypes'

const workersReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_WORKERS:
      return action.payload

      case CHANGE_USERSTATUS:
        return state.map((el) => {
          if(el.id === action.payload) {
            return {
              ...el,
              status: !el.status
            }
          }
          return el
        })
        case DELETE_ONE_WORKER:
          return state.filter((el) => el.id !== action.payload)
      case PUT_USER_PROFILE:
      return 
      

    default:
      return state
  }
}

export default workersReducer
