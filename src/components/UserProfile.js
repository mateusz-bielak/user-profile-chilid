import React from 'react';
import UserHeader from './UserHeader';
import UserComments from './UserComments';

const UserProfile = () => (
  <div className="user_profile">
    <div className="user_profile__background" />
    <div className="user_profile__wrapper" />
    <UserHeader />
    <UserComments />
  </div>
);

export default UserProfile;
