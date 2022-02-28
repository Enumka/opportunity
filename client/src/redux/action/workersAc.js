import {GET_ALL_WORKERS, CREATE_STARTUP, GET_CATEGORY} from '../types/allTypes'
import axios from 'axios'

export const getAllWorkers = (workers) => ({
  type: GET_ALL_WORKERS,
  payload: workers
})

export const getAllWorkersFromServer = (page) => async (dispatch) => {
  const response = await axios(`/workers/${page}`)
  dispatch(getAllWorkers(response.data.content))
  // console.log('-------->',response.data.content);
}

