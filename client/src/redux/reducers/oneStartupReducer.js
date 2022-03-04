import { GET_ONE_POST} from '../types/allTypes'
import initState from '../initState'

const oneStartupReducer = (state = initState, action) => {
  switch (action.type) {
    
        case GET_ONE_POST:
          return action.payload

    default: 
    return state
  }
}

export default oneStartupReducer
