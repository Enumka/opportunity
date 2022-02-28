import { Grid } from "@mui/material"
import { useSelector } from "react-redux"
import PostItem from "../PostItem/PostItem"

function PostList() {
  const posts = useSelector(state => state.posts)
  console.log(posts);

  return (
    <Grid container >

      {posts.map(post => <PostItem key={post.id} post={post} {...post} />)}


    </Grid>
  )
}

export default PostList