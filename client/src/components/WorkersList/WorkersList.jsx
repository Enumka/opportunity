import React from 'react'
import WorkersItem from '../WorkersItem/WorkersItem'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllWorkersFromServer} from '../../redux/action/workersAc'
import { Divider, InputBase, Paper } from '@mui/material'

function WorkersList() {
  const workers = useSelector(state => state.workers)
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const filterClient = workers.filter((worker) => worker.firstName.toLowerCase()
  .includes(input.toLowerCase()) || worker.lastName.toLowerCase()
  .includes(input.toLowerCase()) || worker.body.toLowerCase()
  .includes(input.toLowerCase()));

  useEffect(() => {
    dispatch(getAllWorkersFromServer(0))
  }, [])

  return (
    <div>
      <Paper
          component="form"
          style={{width: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: '5vh'}}
          sx={{
            p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%'
          }}
        >        
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Поиск"
            inputProps={{ 'aria-label': 'search google maps' }}
            input={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
      {filterClient?.filter(el => el.status === true).map((worker) => <WorkersItem key={worker.id} worker={worker}/>)}
      {/* // added filter, if it doesnt work, remove method filter and just leave map */}
    </div>
  )
}

export default WorkersList
