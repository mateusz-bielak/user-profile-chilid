import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

class UserComment extends React.Component {
  timeDifference = (prevDate) => {
    const current = moment();
    const previous = moment(prevDate);
    return current.from(previous, true);
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

UserComment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default UserComment;
