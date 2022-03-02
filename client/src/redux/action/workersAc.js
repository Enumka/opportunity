import {GET_ALL_WORKERS, GET_ONE_WORKER} from '../types/allTypes'
import axios from 'axios'

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
  const response = await axios(`/workers/lk/${id}`)
  dispatch(getOneWorker(response.data.worker))
}
