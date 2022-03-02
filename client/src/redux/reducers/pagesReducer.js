import { GET_PAGES } from '../types/allTypes'
import initState from '../initState'

const pagesReducer = (state = initState, action) => {
  switch (action.type) {


    case GET_PAGES:
      return action.payload

    default:
      return state
  }
}


export default pagesReducer