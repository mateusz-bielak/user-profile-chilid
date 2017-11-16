import React from 'react';
import data from '../../storage/data.json';
import UserComment from './UserComment';

class UserComments extends React.Component {
  state = {
    comments: data.comments,
    user: data.logged_in,
  };
  areCommentsVisible = true;

  addComment = (e) => {
    e.preventDefault();
    const content = e.target.elements.comma.value.trim();
    e.target.elements.comma.value = ''; // Reset text input value
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
  render() {
    this.state.comments.sort((a, b) => new Date(a.date) - new Date(b.date));
    return (
      <div className="user_comments">
        <button onClick={this.hide} className="user_comments__hiding">Hide comments (
          { this.state.comments.length })
        </button>
        <div className="user_comments__scroll">
          { [this.state.comments.map((comment, index) =>
            <UserComment key={index} comment={comment} />)] }
        </div>
        <form onSubmit={this.addComment} className="user_comments__form">
          <input className="user_comments__textbox" type="text" name="comma" placeholder="Add a comment" />
        </form>
      </div>
    );
  }
}

export default UserComments;
