import { take, takeEvery, takeLeading } from "redux-saga/effects";
import { getPostsSaga } from "./postsSaga";

export function* sagas() {
  yield takeLeading('posts/getPosts', getPostsSaga)
}