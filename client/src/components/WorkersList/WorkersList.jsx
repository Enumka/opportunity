import React from 'react'
import WorkersItem from '../WorkersItem/WorkersItem'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllWorkersFromServer} from '../../redux/action/workersAc'

function WorkersList() {
  const workers = useSelector(state => state.workers)
  
  return (
    <div>
      {workers?.filter(el => el.status === true).map((worker) => <WorkersItem key={worker.id} worker={worker}/>)}
      // added filter, if it doesnt work, remove method filter and just leave map
    </div>
  )
}

export default WorkersList
