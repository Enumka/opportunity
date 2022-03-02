import PostList from '../PostList/PostList'
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsFromServer } from '../../redux/action/postAc';
import { useEffect } from 'react';

function PostPage() {



  return (
    <Container>

      <PostList />

    </Container>
  )
}

export default PostPage