import PostList from '../PostList/PostList'
import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getPostsFromServer } from '../../redux/action/postAc';
import { useEffect } from 'react';

function PostPage() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPostsFromServer(0))
  }, [])

  return (
    <Container>

      <PostList />

    </Container>
  )
}

export default PostPage