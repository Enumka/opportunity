import React from 'react'
import WorkersItem from '../WorkersItem/WorkersItem'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllWorkersFromServer} from '../../redux/action/workersAc'

function WorkersList() {
  const workers = useSelector(state => state.workers)
  console.log(workers);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllWorkersFromServer())
  }, [])

  return (
    <div>
      {workers.map((worker) => <WorkersItem key={worker.id} worker={worker}/>)} 
    </div>
  )
}

export default WorkersList
