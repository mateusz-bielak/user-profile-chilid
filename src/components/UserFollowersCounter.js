import React from 'react';

const UserFollowersCounter = props => (
  <div className="user_followers__box">
    <p className="user_followers__values">
      { props.user_stats[1] }
    </p>
    <p className="user_followers__names">
      { props.user_stats[0] }
    </p>
  </div>
);

export default UserFollowersCounter;
