import React from 'react'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { changeStatusFromServer, getPostsFromServerWithoutPages, deleteOnePostFromServer, getPostsFromServer } from '../../redux/action/postAc'





function CheckPost() {

  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPostsFromServerWithoutPages())
  }, [])


  const changeStatus = (id) =>{
    dispatch(changeStatusFromServer(id))
  }

  const deleteHandler = (id) => {
    dispatch(deleteOnePostFromServer(id))
  }

  return (
    <>
    <div style={{fontSize: '60px', textAlign: 'center', fontFamily: 'cursive'}}>Модерация всех постов</div>
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '5vh'}}>
    {posts?.filter((el)=> el.status === false).map((post) => 
      <div key={post.id}>
      <div style={{textAlign: 'center', fontSize: '30px'}}>{post.title}</div>
      <img style={{width: '50vh', height: '30vh'}}src={`http://localhost:3001${post.img}`} />
      <button onClick={()=> changeStatus(post.id)} style={{display: 'flex', marginLeft: 'auto', marginRight: 'auto', fontSize: '20px'}} >{post.status?"Одобрено":"Одобрить"}</button>
      <button onClick={()=> deleteHandler(post.id)} style={{display: 'flex', marginLeft: 'auto', marginRight: 'auto', fontSize: '20px'}} >Удалить</button>
    </div>)}
    </div>
    </>
  )
}
export default CheckPost
