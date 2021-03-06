import React from "react";
import Navbar from "./Navbar";
import AppRouter from "../routers/AppRouter";
import { connect } from "react-redux";
import Posts from "./Posts";
import LandingPage from "./LandingPage";
import { fetchPosts } from "../reducers/ActionCreators";
import AddPost from "./AddPost";
const RenderPost = props => {
  const posts = props.posts.map(post => <Posts post={post} />);
  return <div>{posts}</div>;
};
class SocialApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight
    };
  }

  // componentDidMount() {
  //   window.addEventListener("scroll", this.onScroll, false);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.onScroll, false);
  // }

  // onScroll = () => {
  //   if (
  //     window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
  //     this.props.posts.length === this.props.postCount * 3
  //   ) {
  //     console.log(this.props.posts.legnth === this.props.postCount);
  //     this.props.dispatch(fetchPosts(this.props.postCount));
  //   }
  // };
  // componentDidUpdate() {
  //   console.log("post count" + this.props.postCount * 3);
  //   console.log("post length" + this.props.posts.length);
  // }

  render() {
    return (
      <div className="main-div">
        {!this.props.user.name && <LandingPage />}
        {this.props.user.name && <AppRouter />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps)(SocialApp);
