import {CREATE_STARTUP, GET_CATEGORY, GET_ONE_POST} from '../types/allTypes'
import initState from '../initState'
import React from 'react'

const startupReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_STARTUP:
      return [
        action.payload,
        ...state
      ]
      case GET_CATEGORY:
        return action.payload
        
    default: 
    return state
  }
}

export default startupReducer
