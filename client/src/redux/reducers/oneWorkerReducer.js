import { GET_ONE_WORKER } from '../types/allTypes'
import initState from '../initState'

const oneWorkerReducer = (state = initState, action) => {
  switch (action.type) {
    
      case GET_ONE_WORKER:
      return action.payload

    default:
      return state
  }
}

export default oneWorkerReducer
