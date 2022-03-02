import initState from '../initState'
import { plus, minus } from '../types/allTypes'


const currentPageReducer = (state = initState, action) => {

  switch (action.type) {
    case plus:
      return action.payload + 1;
    case minus:
      return action.payload - 1;
    default:
      return state
  }
}
export default currentPageReducer

