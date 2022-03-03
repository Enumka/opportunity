import {GET_ALL_WORKERS, GET_ONE_WORKER, CHANGE_USERSTATUS, DELETE_ONE_WORKER} from '../types/allTypes'
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

export const getAllWorkersFromServerwithoutPages = () => async (dispatch) => {
  const response = await axios(`/workers`)
  dispatch(getAllWorkers(response.data.worker))
  // console.log('-------->',response.data.worker);
}


export const getOneWorker = (worker) => ({
  type: GET_ONE_WORKER,
  payload: worker
})

export const getOneWorkerFromServer = (id) => async (dispatch) => {
  const response = await axios(`/workers/lk/${id}`)
  dispatch(getOneWorker(response.data.worker))
  console.log('-------->',response.data.worker);
}


export const changeUserStatus = (id) => ({
  type: CHANGE_USERSTATUS,
  payload: id
})


export const changeStatusForWorkersFromServer = (id) => async (dispatch) => {
  await axios.put(`/workers/${id}`)
  dispatch(changeUserStatus(id))
}

export const deleteWorker = (id) => ({
  type: DELETE_ONE_WORKER,
  payload: id
})

export const deleteOneWorkerFromServer = (id) => async (dispatch) => {
  await axios.delete(`/workers/${id}`)
  dispatch(deleteWorker(id))
}
