import axios from 'axios'
import { GET_SKILL } from '../types/skillTypes';

export const getSkill = (value) => {
  return {
    type: GET_SKILL,
    payload: value
  }
}


export const getSkillThank = () => async (dispatch) => {
  const res = await axios('/roles/skill')
  dispatch(getSkill(res.data.skill))
  console.log('SkkkkkiiiilAC',res.data.skill);
};
