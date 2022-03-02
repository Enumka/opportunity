import { Grid, Pagination } from "@mui/material"
import { getPostsFromServer, pageplus } from "../../redux/action/postAc";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import PostItem from "../PostItem/PostItem"

function PostList() {
  
  const dispatch = useDispatch()
  const page = useSelector(state => state.page) 
  const posts = useSelector(state => state.posts) || []
  const currentPage = useSelector(state => state.currentPage) || 1

  useEffect(() => {
    dispatch(getPostsFromServer(currentPage))
  }, [currentPage])

  console.log('page', page, '<<<<<posts', posts);
  console.log('cur', currentPage);
  return (
    <>
      <Grid container >

        {posts.map(post => <PostItem key={post.id} post={post} {...post} />)}


      </Grid>

      <Pagination
        count={page}
        page={currentPage}

        onClick={() => { dispatch(pageplus(currentPage)) }}
      />

    </>
  )
}

export default PostList