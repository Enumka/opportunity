import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"


function WorkersItem({worker}) {
  return (
    <Card sx={{ maxWidth: 345, marginLeft: '80vh', marginTop: '5vh'}}>
      <CardMedia
        component="img"
        height="240"
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
        {/* <Button size="small">Share</Button> */}
        <Link to={`/workerprofile/${worker.id}`}><Button size="small">Learn More</Button></Link>
      </CardActions>
    </Card>
  )
}

export default WorkersItem

