import {GET_ALL_WORKERS} from '../types/allTypes'
import axios from 'axios'

export const getAllWorkers = (workers) => ({
  type: GET_ALL_WORKERS,
  payload: workers
})

export const getAllWorkersFromServer = () => async (dispatch) => {
  const response = await axios('/workers')
  dispatch(getAllWorkers(response.data))
  console.log(response);
}
