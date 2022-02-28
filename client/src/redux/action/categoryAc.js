import { GET_CATEGORY } from '../types/allTypes'
import axios from 'axios'

export const getCategory = (category) => ({
  type: GET_CATEGORY,
  payload: category
})

export const getCategoryFromServer = () => async (dispatch) => {
  const res = await axios(`/posts`)
  dispatch(getCategory(res.data.category))
  console.log('-------->',res.data.category)
}