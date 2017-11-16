import React from 'react';

class UserComment extends React.Component {
  timeDifference = (prevDate) => {
    const current = new Date();
    const previous = new Date(prevDate);

    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;

    const elapsed = current - previous;

    if (elapsed < msPerMinute) {
      return `${Math.floor(elapsed / 1000)}s`;
    } else if (elapsed < msPerHour) {
      return `${Math.floor(elapsed / msPerMinute)}m`;
    } else if (elapsed < msPerDay) {
      return `${Math.floor(elapsed / msPerHour)}h`;
    }
    return `${Math.floor(elapsed / msPerDay)}d`;
  };
  render() {
    return (
      <div className="user_comments__container">
        <div className="user_comments__photo" style={{ backgroundImage: `url(${this.props.comment.photo})` }} alt="user.jpg" />
        <div className="user_comments__content">
          <p className="user_comments__name">
            { this.props.comment.name }
          </p>
          <p className="user_comments__commentary">
            { this.props.comment.content }
          </p>
        </div>
        <p className="user_comments__date">
          { this.timeDifference(this.props.comment.date) }
        </p>
      </div>
    );
  }
}

export default UserComment;
