import React from 'react';
import uuid from 'uuid';
import data from '../../storage/data.json';
import UserComment from './UserComment';

class UserComments extends React.Component {
  state = {
    comments: data.comments,
    user: data.logged_in,
    commentsAmount: data.comments.length,
  };
  areCommentsVisible = true;

  addComment = (e) => {
    e.preventDefault();
    const content = e.target.elements.comment.value.trim();
    e.target.elements.comment.value = ''; // Reset text input value
    if (content) {
      const element = document.querySelector('.user_comments__scroll');
      element.classList.remove('user_comments__scroll--display');
      this.setState(prevState => ({
        comments: prevState.comments.concat([{
          photo: this.state.user.photo,
          name: this.state.user.user,
          content,
          date: new Date(),
        }]),
        commentsAmount: prevState.commentsAmount + 1,
      }));
    }
  }

  hide = () => {
    const element = document.querySelector('.user_comments__scroll');
    element.classList.toggle('user_comments__scroll--display');
    const button = document.querySelector('.user_comments__hiding');
    this.areCommentsVisible = !this.areCommentsVisible;
    if (this.areCommentsVisible) {
      button.textContent = `Show comments (${this.state.comments.length})`;
    } else {
      button.textContent = `Hide comments (${this.state.comments.length})`;
    }
  }

  sortCommentsByDate = () =>
    this.state.comments.sort((a, b) =>
      new Date(a.date) - new Date(b.date));

  render() {
    this.sortCommentsByDate();
    return (
      <div className="user_comments">
        <button onClick={this.hide} className="user_comments__hiding">Hide comments (
          { this.state.commentsAmount })
        </button>
        <div className="user_comments__scroll">
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
