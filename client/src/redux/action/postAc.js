import { CREATE_STARTUP, GET_ALL_POST, GET_ONE_POST, GET_PAGES, plus, minus, count, SET_COUNT_PAGE, CHANGE_STATUS, DELETE_ONE_POST, GET_POSTS } from '../types/allTypes'
import axios from 'axios'
// const arrCreator = (num) => {
//   const arr = [];
//   for (let i = 0; i < num; i += 1) {
//     arr.push(i)
//   }
//   return arr
// };



export const pageplus = (value) => ({
  type: plus,
  payload: value

})
// export const pageminus = (value) => ({
//   type: minus,
//   payload: value
// })

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

// export const getPostsFromServer = (num) => async (dispatch) => {
//   const res = await axios(`posts/${num}`)
//   dispatch(getPosts(res.data.content))
// }

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


export const changeStatusFromServer = (id, status) => async (dispatch) => {
  await axios.put(`/crm/post/${id}`)
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
