import initState from '../initState'
import { plus, minus, SET_COUNT_PAGE } from '../types/allTypes'

const currentPageReducer = (state = initState, action) => {

  switch (action.type) {
    case plus:
      return action.payload + 1;
    case minus:
      return action.payload - 1;

    case SET_COUNT_PAGE:

      return action.payload

    default:
      return state
  }
}
export default currentPageReducer

