import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getOnePostFromServer } from '../../redux/action/postAc'

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function InfoProjectCard() {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  const startup = useSelector(state => state.startup)
  console.log(startup);
  const dispatch = useDispatch()
  const params = useParams()
  // console.log(params);
  useEffect(() => {
    // console.log("effect get");
    dispatch(getOnePostFromServer(params.id))
    console.log(params.id);
  }, [])

  return (
    <Card sx={{ maxWidth: 445, maxHeight: 645, marginLeft: 'auto', marginRight: 'auto', marginTop: '10vh' }}>
      <CardHeader
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        style={{ marginLeft: '19vh', marginRight: 'auto' }}
        title={startup.title}
        subheader={startup.createdAt}
      />
      <CardMedia
        component="img"
        height="294"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt84J4Um8xIh1GYpbufQM3L3gFLv6bmM9Tvg&usqp=CAU"
        alt="Paella dish"
      />
      <CardContent>
        <Typography
          variant="body2" color="text.secondary">
          {startup.categoryId}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <FavoriteIcon />
        Связаться c создателем идеи
      </IconButton>
        {/* <IconButton aria-label="share">
        <ShareIcon />
      </IconButton> */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            {startup.body}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default InfoProjectCard
