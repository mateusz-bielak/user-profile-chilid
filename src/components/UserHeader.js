import React from 'react';
import data from '../../storage/data.json';
import UserInfo from './UserInfo';
import UserFollowers from './UserFollowers';

class UserHeader extends React.Component {
  state = {
    likes: data.likes,
    following: data.following,
    followers: data.followers,
  };
  isLikeAdded = false;
  isFollowersAdded = false;
  toggleLike = () => {
    this.setState((prevState) => {
      if (this.isLikeAdded) {
        return {
          likes: [prevState.likes[0], prevState.likes[1] + 1],
        };
      }
      return {
        likes: [prevState.likes[0], prevState.likes[1] - 1],
      };
    });
    this.isLikeAdded = !this.isLikeAdded;
  }
  toggleFollowers = () => {
    this.setState((prevState) => {
      if (this.isFollowersAdded) {
        return {
          followers: [prevState.followers[0], prevState.followers[1] + 1],
        };
      }
      return {
        followers: [prevState.followers[0], prevState.followers[1] - 1],
      };
    });
    this.isFollowersAdded = !this.isFollowersAdded;
  }
  render() {
    return (
      <div className="user_header">
        <UserInfo toggleLike={this.toggleLike} />
        <UserFollowers
          likes={this.state.likes}
          following={this.state.following}
          followers={this.state.followers}
          toggleFollowers={this.toggleFollowers}
        />
      </div>
    );
  }
}

export default UserHeader;
