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

export default UserFollowers;
