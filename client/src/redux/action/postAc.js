import { CREATE_STARTUP, GET_ALL_POST, GET_ONE_POST } from '../types/allTypes'
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


export const getOnePost = (startup) => ({
  type: GET_ONE_POST,
  payload: startup
})

export const getOnePostFromServer = (id) => async (dispatch) => {
  const response = await axios(`/posts/detailed/${id}`)
  dispatch(getOnePost(response.data.post))
  console.log(response.data.post);
  }
  
export const getPostsFromServer = (num) => async (dispatch) => {
  const res = await axios(`posts/${num}`)
  dispatch(getPosts(res.data.content))

  console.log('res 39==>', res.data.content);
}
