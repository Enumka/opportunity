import { CREATE_STARTUP, GET_ALL_POST } from '../types/allTypes'
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
  console.log('-------->', response.data.post)
}


export const getPosts = (posts) => ({
  type: GET_ALL_POST,
  payload: posts
})

export const getPostsFromServer = (num) => async (dispatch) => {
  const res = await axios(`posts/${num}`)
  dispatch(getPosts(res.data.content))

  console.log('res 39==>', res.data.content);
}