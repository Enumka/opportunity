import { GET_CATEGORY } from '../types/allTypes'
import initState from '../initState'

const categoryReducer = (state = initState, action) => {

  switch (action.type) {


    case GET_CATEGORY:
      return action.payload

    default:
      return state
  }
}

export default categoryReducer