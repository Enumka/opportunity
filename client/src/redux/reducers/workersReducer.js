import {GET_ALL_WORKERS, CREATE_STARTUP, GET_ONE_WORKER} from '../types/allTypes'
import initState from '../initState'
import React from 'react'

const workersReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_WORKERS:
      return action.payload

      case GET_ONE_WORKER:
      return action.payload

    default: 
    return state
  }
}

export default workersReducer
