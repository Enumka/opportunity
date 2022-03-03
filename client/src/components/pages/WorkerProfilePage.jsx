import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getOneWorkerFromServer } from '../../redux/action/workersAc'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




function WorkerProfilePage() {


  const worker = useSelector(state => state.worker)
  console.log(worker);
  const dispatch = useDispatch()
  const params = useParams()

  useEffect(() => {
    // console.log("effect get");
    dispatch(getOneWorkerFromServer(params.id))
  }, [])
  

  return (
    <Card sx={{ maxWidth: 445,  marginLeft: 'auto', marginRight: 'auto', marginTop: '15vh'}}>
      <CardMedia
        component="img"
        height="340"
        image={`http://localhost:3001${worker.img}`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {worker.firstName} {worker.lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* {worker.lastName} */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {worker.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Связаться</Button>
      </CardActions>
    </Card>
    
  )
}

export default WorkerProfilePage
