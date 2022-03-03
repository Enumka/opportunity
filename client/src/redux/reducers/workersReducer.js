import { GET_ALL_WORKERS} from '../types/allTypes'
import initState from '../initState'
import { PUT_USER_PROFILE } from '../types/userTypes'

const workersReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_WORKERS:
      return action.payload
      case PUT_USER_PROFILE:
      return 
      

    default:
      return state
  }
}

export default workersReducer
