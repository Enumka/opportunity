import { GET_ALL_WORKERS} from '../types/allTypes'
import initState from '../initState'

const workersReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_WORKERS:
      return action.payload

      

    default:
      return state
  }
}

export default workersReducer
