import React from 'react'
import WorkersItem from '../WorkersItem/WorkersItem'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Grid } from '@mui/material'

function WorkersList() {
  const [fetching, setFetching] = useState(true)
  const [workers, setWorkers] = useState([])
  const [curPag, setCurPag] = useState(1)
  const [totalPage, setTotalPage] = useState(null)


  console.log('1', totalPage, curPag);
  useEffect(() => {
    if (fetching) {
      console.log('fetching');
      axios.get(`/workers/${curPag}`)
        .then(responce => {
          console.log(responce.data);
          setTotalPage(responce.data.totalPages)
          setWorkers([...workers, ...responce.data.content])
          setCurPag(prevState => prevState + 1)
        })
        .finally(() => setFetching(false))
    }
  }, [fetching])


  const filterClient = workers.filter((worker) => worker.firstName.toLowerCase()
  .includes(input.toLowerCase()) || worker.lastName.toLowerCase()
  .includes(input.toLowerCase()) || worker.body.toLowerCase()
  .includes(input.toLowerCase()));

  useEffect(() => {
    document.addEventListener('scroll', scrollHadnler)

    return function () {
      document.removeEventListener('scroll', scrollHadnler)
    }
  }, [])


  const scrollHadnler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && totalPage < curPag) {
      console.log('scroll');
      // console.log(e.target.documentElement.scrollHeight, '--'.e.target.documentElement.scrollTop, '++++', window.innerHeight);
      setFetching(true)
    }
  }


  return (
    <>
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
      <Grid container spacing={2}  >


        {workers?.map((worker) => <WorkersItem key={worker.id} worker={worker} />)}

      </Grid>
    </>

  )
}

export default WorkersList
