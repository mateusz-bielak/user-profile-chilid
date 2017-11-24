import React from 'react';
import uuid from 'uuid';
import data from '../../storage/data.json';
import UserComment from './UserComment';

class UserComments extends React.Component {
  state = {
    comments: data.comments,
    user: data.logged_in,
    commentsAmount: data.comments.length,
    areCommentsVisible: true,
    hidingButtonTextContent: 'Hide comments',
  };

  addComment = (e) => {
    e.preventDefault();
    const content = e.target.elements.comment.value.trim();
    e.target.elements.comment.value = ''; // Reset text input value
    if (content) {
      this.setState(prevState => ({
        comments: prevState.comments.concat([{
          photo: this.state.user.photo,
          name: this.state.user.user,
          content,
          date: new Date(),
        }]),
        commentsAmount: prevState.commentsAmount + 1,
        areCommentsVisible: true,
      }));
    }
  }

  hidingButton = () => {
    this.setState(prevState => ({
      areCommentsVisible: !prevState.areCommentsVisible,
      hidingButtonTextContent: this.state.areCommentsVisible ?
        'Show comments' : 'Hide comments',
    }));
  }

  sortCommentsByDate = () =>
    this.state.comments.sort((a, b) =>
      new Date(a.date) - new Date(b.date));

  handleCommentsDisplaying = () => {
    const classList = ['user_comments__scroll'];
    if (!this.state.areCommentsVisible) {
      classList.push('user_comments__scroll--display');
    }
    return classList;
  }

  render() {
    this.sortCommentsByDate();
    return (
      <div className="user_comments">
        <button onClick={this.hidingButton} className="user_comments__hiding">{this.state.hidingButtonTextContent} (
          { this.state.commentsAmount })
        </button>
        <div className={this.handleCommentsDisplaying().join(' ')} >
          { [this.state.comments.map(comment =>
            <UserComment key={uuid()} comment={comment} />)] }
        </div>
        <form onSubmit={this.addComment} className="user_comments__form">
          <input className="user_comments__textbox" type="text" name="comment" placeholder="Add a comment" />
        </form>
      </div>
    );
  }
}

export default UserComments;
