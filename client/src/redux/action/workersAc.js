import {GET_ALL_WORKERS, GET_ONE_WORKER} from '../types/allTypes'
import axios from 'axios'
import { PUT_USER_PROFILE } from '../types/userTypes'

export const getAllWorkers = (workers) => ({
  type: GET_ALL_WORKERS,
  payload: workers
})

export const getAllWorkersFromServer = (page) => async (dispatch) => {
  const response = await axios(`/workers/${page}`)
  dispatch(getAllWorkers(response.data.content))
}

export const getOneWorker = (worker) => ({
  type: GET_ONE_WORKER,
  payload: worker
})

export const getOneWorkerFromServer = (id) => async (dispatch) => {
  console.log(id);
  const response = await axios(`/workers/lk/${id}`)
  dispatch(getOneWorker(response.data.worker))
}

export const putWorkerProfile = (worker) => ({
  type: PUT_USER_PROFILE,
  payload: worker
})




export const putWorkerFromThunk = (value, id) => async (dispatch) => {
 console.log(id, value);
 
  const response = await axios.put(`/workers/${id}`, value, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  })
  dispatch(putWorkerProfile(response.data.worker))
  console.log('-------->',response.data.worker);
}
