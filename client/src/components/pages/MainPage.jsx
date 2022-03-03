import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllWorkersFromServer } from '../../redux/action/workersAc';

function MainPage() {

  const navigate = useNavigate()
  const workers = useSelector(state => state.workers)
  const startApPosts = useSelector(state => state.posts)

   const dispatch = useDispatch()
useEffect(() => {
dispatch(getAllWorkersFromServer())
},[])

  const startApNavigate = (e) => {
    if(e.target.innerText === 'ИСПОЛНИТЕЛИ') {
       navigate('/workers')
    } else {
    navigate('/startappage')
    }
  }

  return (
    <>
    <Container sx={{maxWidth:"sm", mt:"40px", }}>
    <Grid container spacing={2} columns={16}>
    <Grid item xs={8}>
      <Typography gutterBottom variant="h4" sx={{marginLeft: "35%"}}>
        Идеи
      </Typography >
    <ImageList sx={{ width: 500, height: 600, }}>
    {startApPosts.map((item) => (
      <ImageListItem key={item.id}>
        <img
          src={`http://localhost:3001${item.img}`}
          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
        />
        <ImageListItemBar
          title={item.title}
          subtitle={<span>Дата создания: {item.createdAt.slice(5, 10) +  '-' + item.createdAt.slice(0, 4)}</span>}
          position="below"
        />
      </ImageListItem>
    ))}
  </ImageList>
  <Button variant='outlined' onClick={ startApNavigate}>
    Идеи
  </Button>
  </Grid>
  <Grid item xs={8}>
  <Typography gutterBottom variant="h4" sx={{marginLeft: "20%"}}>
        Исполнители
      </Typography >
      <ImageList sx={{ width: 500, height: 600 }}>
      {workers.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={`http://localhost:3001${item.img}`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.firstName}
            subtitle={<span>Дата создания: {item.createdAt.slice(5, 10) +  '-' + item.createdAt.slice(0, 4)}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
      <Button variant='outlined' onClick={ startApNavigate}>
    Исполнители
  </Button>
  </Grid>
    </Grid>
    </Container>
    </>
  )
}

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Breakfast',
//     author: '@bkristastucchio',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//     author: '@rollelflex_graphy726',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//     author: '@helloimnik',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//     author: '@nolanissac',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//     author: '@hjrc33',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//     author: '@arwinneil',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//     author: '@tjdragotta',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//     author: '@katie_wasserman',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//     author: '@silverdalex',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//     author: '@shelleypauls',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//     author: '@peterlaster',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//     author: '@southside_customs',
//   },
// ];

export default MainPage
