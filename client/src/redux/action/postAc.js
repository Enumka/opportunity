import { CREATE_STARTUP, GET_ALL_POST, GET_ONE_POST, GET_PAGES, plus, SET_COUNT_PAGE } from '../types/allTypes'
import axios from 'axios'



export const pageplus = (value) => ({
  type: plus,
  payload: value

})


export const pagecount = (count) => ({
  type: SET_COUNT_PAGE,
  payload: count
})


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
}

export const getOnePost = (startup) => ({
  type: GET_ONE_POST,
  payload: startup
})
export const getOnePostFromServer = (id) => async (dispatch) => {
  const response = await axios(`/posts/detailed/${id}`)
  dispatch(getOnePost(response.data.post))
}





export const getPosts = (posts) => ({
  type: GET_ALL_POST,
  payload: posts
})

export const getPage = (page) => ({
  type: GET_PAGES,
  payload: page
})


export const getPostsFromServer = (num) => async (dispatch) => {
  const res = await axios(`posts/${num}`)
  dispatch(getPosts(res.data.content));
  dispatch(getPage(res.data.totalPages))
}

// export const getPagesPages = (page) => async (dispatch) => {
//   const res = await axios(`posts/${page}`)
//   dispatch(getPage(res.data.totalPages))
// }
