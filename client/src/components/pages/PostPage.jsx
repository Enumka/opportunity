import PostList from '../PostList/PostList'
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useEffect } from 'react';
import { getPostsFromServer } from '../../redux/action/postAc';

function PostPage() {
  const currentPage = useSelector(state => state.currentPage) || 1
  const dispatch = useDispatch()
  const { page } = useParams()

  useEffect(() => {
    // console.log('.//...//', currentPage);
    dispatch(getPostsFromServer(currentPage))
  }, [currentPage, dispatch])

  return (
    <Container sx={{
      marginY: 15, marginX: 'auto'
    }}>

      <PostList page={page} />

    </Container >


  )
}

export default memo(PostPage)
