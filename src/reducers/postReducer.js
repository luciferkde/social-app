import { addHeartStatus } from "./ActionCreators";

const postReducer = (
  state = {
    posts: [],
    postCount: 0,
    loading: true
  },
  action
) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        posts: state.posts.concat(action.data),
        postCount: state.postCount + 1,
        loading: false
      };
    case "ADD_SINGLE_POST":
      return {
        ...state,
        posts: [action.data, ...state.posts],
        postCount: state.postCount + 1,
        loading: false
      };
    case "HEART_POST":
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post._id === action.data._id) {
            return {
              ...post,
              hearts: [action.data.hearts, ...post.hearts]
            };
          } else return post;
        })
      };
    case "POST_LOADING":
      return { ...state, loading: true };
    case "REMOVE_POST":
      return state.filter(post => post._id !== action.postid);
    case "UPDATE_POST":
      return state.map(post => {
        if (post._id === action.post._id) {
          return {
            ...post,
            _id: action.post._id,
            author: action.post.author,
            body: action.post.body
          };
        } else return post;
      });
    default:
      return state;
  }
};
export default postReducer;
