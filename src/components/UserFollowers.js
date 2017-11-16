import PropTypes from 'prop-types';
import React from 'react';
import UserFollowersCounter from './UserFollowersCounter';

const UserFollowers = props => (
  <div className="user_followers">
    <div className="user_followers__stats">
      <UserFollowersCounter user_stats={props.likes} />
      <UserFollowersCounter user_stats={props.following} />
      <UserFollowersCounter user_stats={props.followers} />
    </div>
    <button className="user_followers__button" onClick={props.toggleFollowers}>Follow</button>
  </div>
);

UserFollowers.propTypes = {
  likes: PropTypes.array.isRequired,
  following: PropTypes.array.isRequired,
  followers: PropTypes.array.isRequired,
  toggleFollowers: PropTypes.func.isRequired,
};

export default UserFollowers;
