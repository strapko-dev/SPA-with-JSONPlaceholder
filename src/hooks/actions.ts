import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { getPosts, postsActions } from "../store/reducers/posts.slice"

const actions = {
  ...postsActions,
  getPosts,
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}