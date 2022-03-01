import { SET_ROLES } from "../types/userTypes";
import axios from 'axios'

export const setRoles = (value) => {
  return {
    type: SET_ROLES,
    payload: value
  }
}


export const getRoles = () => async (dispatch) => {
  const res = await axios('/roles')
  dispatch(setRoles(res.data.roles))
};
