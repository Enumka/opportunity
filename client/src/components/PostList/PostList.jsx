import { Divider, Grid, InputBase, Pagination, PaginationItem, Paper, Stack } from "@mui/material"
import { pagecount } from "../../redux/action/postAc";
import { useDispatch, useSelector } from "react-redux"
import PostItem from "../PostItem/PostItem"
import { Link } from "react-router-dom";
import { memo, useState } from "react";

function PostList({ page }) {
  const posts = useSelector(state => state.posts) || [];
  const totalPage = useSelector(state => state.page) || 1
  const [input, setInput] = useState('')

  const filterClient = posts.filter((post) => post.title.toLowerCase()
  .includes(input.toLowerCase()) || post.body.toLowerCase()
  .includes(input.toLowerCase()))

  const dispatch = useDispatch()
  // console.log(page)
  posts.forEach(post =>
    console.log(post.id))

  return (
    <>
    <Paper
          component="form"
          style={{width: '129vh', marginBottom: '5vh'}}
          sx={{
            p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%'
          }}
        >         
         <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Поиск"
            inputProps={{ 'aria-label': 'search google maps' }}
            input={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
      <Grid container spacing={2}  >

      {/* {posts.filter(el => el.status === true).map(post => <PostItem key={post.id} post={post} {...post} />)} */}
        {filterClient.map(post => <PostItem key={post.id} post={post} {...post} />)}


      </Grid>

      <Stack spacing={4}  >

        <Pagination
          count={totalPage}
          page={parseInt(page) || 1}
          onChange={(_, num) => dispatch(pagecount(num))}
          size="large"
          sx={{ marginY: 3, marginX: 'auto' }}
          renderItem={

            (item) => (
              <PaginationItem
                component={Link}
                to={`/startappage/${item.page}`}
                {...item}
              />
              /* ,
              console.log('item===>', item) */
            )
          }
        />
      </Stack>

    </>
  )
}


export default memo(PostList)
