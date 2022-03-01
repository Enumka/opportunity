import {CREATE_STARTUP, GET_CATEGORY, GET_ONE_POST} from '../types/allTypes'
import axios from 'axios'

export const createStartUp = (startup) => ({
  type: CREATE_STARTUP,
  payload: startup
})

export const createStartupToServer = (value) => async (dispatch) => {
  const response = await axios.post(`/posts`, value, {
    headers: {
      'Content-Type': 'multipart/form-data',
  }
  })
  dispatch(createStartUp(response.data.post))
  console.log('-------->',response.data.post)
}

export const getCategory = (category) => ({
  type: GET_CATEGORY,
  payload: category
})

export const getCategoryFromServer = () => async (dispatch) => {
  const response = await axios(`/posts`)
  dispatch(getCategory(response.data.category))
  // console.log('-------->',response.data.category)
}


export const getOnePost = (startup) => ({
  type: GET_ONE_POST,
  payload: startup
})

export const getOnePostFromServer = (id) => async (dispatch) => {
  const response = await axios(`/posts/detailed/${id}`)
  dispatch(getOnePost(response.data.post))
  console.log(response.data.post);
  }
