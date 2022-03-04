import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getOnePostFromServer } from '../../redux/action/postAc'
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';



import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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



  const post = useSelector(state => state.post)
  
  const dispatch = useDispatch()
  const params = useParams()
  useEffect(() => {
    dispatch(getOnePostFromServer(params.id))
  }, [])
  
  return (
    <Card sx={{ maxWidth: 445, maxHeight: 845, marginLeft: 'auto', marginRight: 'auto', marginTop: '10vh' }}>
      <CardHeader
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        style={{ marginLeft: '11vh', marginRight: 'auto' }}
        title={post.title}
        // subheader={`Дата Создания: ${post.createdAt.slice(0,10)}`}
        />
      <CardMedia
        component="img"
        height="294"
        image={`http://localhost:3001${post.img}`}
        alt="Paella dish"
      />
      <CardContent>
        <Typography
          variant="body2" color="text.secondary">
          {post.categoryId}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
          <Link to={`/workerprofile/${post.userId}`}>
          Связаться c создателем идеи
            </Link>
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
            {post.body}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default InfoProjectCard
