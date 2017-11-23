import PropTypes from 'prop-types';
import React from 'react';

const UserFollowersCounter = props => (
  <div className="user_followers__box">
    <p className="user_followers__values">
      { props.userStats[1] }
    </p>
    <p className="user_followers__names">
      { props.userStats[0] }
    </p>
  </div>
);

UserFollowersCounter.propTypes = {
  userStats: PropTypes.array.isRequired,
};

export default UserFollowersCounter;
