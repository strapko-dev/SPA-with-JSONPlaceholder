import { createAction, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Posts } from '../../models/posts.model'

interface initialStatePosts {
  posts: Posts
}

const initialState: initialStatePosts = {
  posts: []
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
      getPosts(state, action: PayloadAction<Posts>) {
        state.posts = action.payload
      },
  },
})

export const getPosts = createAction('posts/getPosts')
export const postsActions = postsSlice.actions
export default postsSlice.reducer