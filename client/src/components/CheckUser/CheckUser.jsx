import React from 'react'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { changeStatusForWorkersFromServer, getAllWorkersFromServerwithoutPages, deleteOneWorkerFromServer } from '../../redux/action/workersAc'
import {getAllWorkersFromServer} from '../../redux/action/workersAc'





function CheckUser() {

  const workers = useSelector(state => state.workers)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getAllWorkersFromServerwithoutPages())
  }, [])
  
  const deleteHandler = (id) => {
    dispatch(deleteOneWorkerFromServer(id))
  }
  
  const changeStatus = (id) =>{
    dispatch(changeStatusForWorkersFromServer(id))
  }

  return (
    <>
    <div style={{fontSize: '60px', marginLeft: '60vh', fontFamily: 'cursive'}}>Модерация всех Юзеров</div>
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '5vh'}}>

    {workers?.filter((el)=> el.status === false).map((worker) => 
      <div key={worker.id}>
      <div style={{textAlign: 'center', fontSize: '30px'}}>{worker.firstName}</div>
      <div style={{textAlign: 'center', fontSize: '30px'}}>{worker.lastName}</div>
      <img style={{width: '50vh', height: '30vh'}}src={`http://localhost:3001${worker.img}`} />
      <button onClick={()=> changeStatus(worker.id)} style={{display: 'flex', marginLeft: 'auto', marginRight: 'auto', fontSize: '20px'}} >{worker.status?" Одобрить":"Одобрено"}</button>
      <button onClick={()=> deleteHandler(worker.id)} style={{display: 'flex', marginLeft: 'auto', marginRight: 'auto', fontSize: '20px'}} >Удалить</button>
    </div>)}
    </div>
    </>
  )
}

export default CheckUser
