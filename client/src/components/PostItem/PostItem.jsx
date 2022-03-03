import React, { memo } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { Link } from "react-router-dom"


function PostItem({ id, title, body, img }) {
  return (
    <Grid item xs={12} md={4}>

      <Card sx={{ maxWidth: 345, height: 500 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={`http://localhost:3001${img}`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Link to={`/infoproject/${id}`}><Button size="small" color="primary">
            Подробнее
          </Button></Link>
        </CardActions>
      </Card>
    </Grid>

  );
}

export default memo(PostItem)
