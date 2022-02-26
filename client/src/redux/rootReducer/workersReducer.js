import {GET_ALL_WORKERS} from '../types/allTypes'

import React from 'react'

const workersReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_WORKERS:
      return action.payload

    default: 
    return state
  }
}

export default workersReducer
