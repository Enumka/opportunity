import { Grid, Pagination, PaginationItem, Stack } from '@mui/material';
import { pagecount } from '../../redux/action/postAc';
import { useDispatch, useSelector } from 'react-redux';
import PostItem from '../PostItem/PostItem';
import { Link } from 'react-router-dom';
import { memo } from 'react';
import AnimatedPage from '../AnimationPage/AnimationPage';

function PostList({ page }) {
  const posts = useSelector((state) => state.posts) || [];
  const totalPage = useSelector((state) => state.page) || 1;

  const dispatch = useDispatch();

  return (
    <>
      <AnimatedPage>
        <Grid container spacing={2}>
          {posts.map((post) => (
            <PostItem key={post.id} post={post} {...post} />
          ))}
        </Grid>

        <Stack spacing={4}>
          <Pagination
            count={totalPage}
            page={parseInt(page) || 1}
            onChange={(_, num) => dispatch(pagecount(num))}
            size="large"
            sx={{ marginY: 3, marginX: 'auto' }}
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={`/startappage/${item.page}`}
                {...item}
              />
            )}
          />
        </Stack>
      </AnimatedPage>
    </>
  );
}

export default memo(PostList);
