import React from 'react'
import WorkersList from '../WorkersList/WorkersList'
import {useEffect} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {getAllWorkersFromServer} from '../../redux/action/workersAc'


function Workers() {

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(getAllWorkersFromServer(0))
  // }, [])
  return (

    <div>
      <WorkersList/>
    </div>

  )
}

export default Workers
