import { CREATE_STARTUP, GET_ALL_POST, GET_ONE_POST, CHANGE_STATUS, DELETE_ONE_POST, GET_POSTS } from '../types/allTypes'
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
}

export const getOnePost = (startup) => ({
  type: GET_ONE_POST,
  payload: startup
})

export const getOnePostFromServer = (id) => async (dispatch) => {
  const response = await axios(`/posts/detailed/${id}`)
  dispatch(getOnePost(response.data.post))
  }


export const getAllPosts = (posts) => ({
  type: GET_POSTS,
  payload: posts
})

export const getPostsFromServerWithoutPages = () => async (dispatch) => {
  const res = await axios(`/posts/all`)
  dispatch(getAllPosts(res.data.content))
}

export const changeStatus = (id) => ({
  type: CHANGE_STATUS,
  payload: id
})


export const changeStatusFromServer = (id) => async (dispatch) => {
  await axios.put(`/posts/${id}`)
  dispatch(changeStatus(id))
}


export const deleteOnePost = (id) => ({
  type: DELETE_ONE_POST,
  payload: id

})

export const deleteOnePostFromServer = (id) => async (dispatch) => {
  await axios.delete(`/posts/${id}`)
  dispatch(deleteOnePost(id))
}


