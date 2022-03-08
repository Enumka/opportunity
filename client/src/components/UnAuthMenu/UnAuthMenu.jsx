import { UnAuthMenu } from '../../config';
import {Link} from 'react-router-dom';
import React from 'react'
import cls from './style.module.css'
function UnAuthMenuList() {
  return (
    <div className={cls.menu}>
    {UnAuthMenu.map(item => <Link  key={item.link} to={item.link}> {item.title}</Link>)}
    </div>
  )
}

export default UnAuthMenuList
