import axios from "axios"
import { Navigate } from "react-router-dom"
import { LOGOUT, SET_USER, SIGN_IN } from "../types/userTypes"

export const setUser = (value) => {
  return {
    type: SET_USER,
    payload: value
  }
}


export const getUser = (input) =>  async (dispatch) => {
   const res = await axios.post('/users/signup', input)
   dispatch(setUser(res.data.user))
}


export const checkUser = () => async (dispatch) => {
  const res = await axios.post('/users/check')
  if (res.response.ok) {
  dispatch(setUser(res.data.user))
  } else {
    dispatch(setUser(null))
  }
}




export const signIn = (input, navigate) => async (dispatch) => {
  try {
    const res = await axios.post('/users/signin', input)
    dispatch({type: SIGN_IN, payload: res.data.user})
    navigate('/')
  } catch (error) {
    navigate('/login')
  }
}


export const logout = () => async (dispatch) => {
  const res = await axios('/users/logout')
  dispatch({type: LOGOUT, payload: null })
  
}
