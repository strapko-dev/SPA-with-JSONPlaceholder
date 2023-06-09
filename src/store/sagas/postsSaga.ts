import { put } from "redux-saga/effects";
import { postsActions } from "../reducers/posts.slice";
import { fetchPosts } from "../../api/fetchPosts";

export function* getPostsSaga(): any {
  const payload = yield fetchPosts();
  const {getPosts} = postsActions

  yield put(getPosts(payload));
}