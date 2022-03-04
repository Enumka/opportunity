import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"
import { Grid } from '@mui/material';


function WorkersItem({ worker }) {
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ maxWidth: 345 }}>
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
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {worker.body}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/workerprofile/${worker.id}`}><Button size="small">Learn More</Button></Link>
        </CardActions>
      </Card>

    </Grid >

  )
}

export default WorkersItem

