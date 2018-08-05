import React from "react";
import { Comment, Form } from "semantic-ui-react";
import Button from "../ButtonCustom";
import CommentNested from "./CommentNested";
import TextareaAutosize from "react-autosize-textarea";

class CommentReplies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      levels: this.props.levels,
      replyBoxShow: false
    };
    this.handleReplyClick = this.handleReplyClick.bind(this);
  }

  handleReplyClick() {
    this.setState({
      replyBoxShow: !this.state.replyBoxShow
    });
  }

  render() {
    return (
      <Comment.Group>
        <Comment>
          <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
          <Comment.Content>
            <Comment.Author as="a">Jenny Hess</Comment.Author>
            <Comment.Metadata>
              <div>Just now</div>
            </Comment.Metadata>
            <Comment.Text>Elliot you are always so right :)</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Like</Comment.Action>
              <Comment.Action onClick={this.handleReplyClick}>
                Reply
              </Comment.Action>
            </Comment.Actions>
          </Comment.Content>

          {this.state.replyBoxShow ? (
            <Form className="animated fadeIn">
              <TextareaAutosize
                rows={1}
                placeholder="minimun height is 3 rows"
              />
              <Button color="primary">Reply</Button>
            </Form>
          ) : (
            <div />
          )}

          {this.state.levels !== 1 ? (
            <CommentNested levels={this.state.levels - 1} />
          ) : (
            <div />
          )}
        </Comment>
      </Comment.Group>
    );
  }
}

export default CommentReplies;
