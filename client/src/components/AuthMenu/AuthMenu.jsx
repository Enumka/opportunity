import { AuthMenu } from '../../config';
import React from 'react'
import { Button } from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import cls from './style.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { logout } from '../../redux/action/userAC';
function AuthMenuList() {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logoutHandler = () => {
    dispatch(logout())
    navigate('/login')
  }
  return (
    <div className={cls.menu}>
    {AuthMenu.map(item => {
      if(user.roleId !== 1 && item.title === 'CRM'){
        return 
      } else { 
        return <Link to={item.link}> {item.title}</Link>}
      })
    }
    
    <button className={cls.logout} onClick={logoutHandler}>Выйти</button>
    </div>
  )
}

export default AuthMenuList
