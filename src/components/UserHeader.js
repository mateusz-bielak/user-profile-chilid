import React from 'react';
import data from '../../storage/data.json';
import UserInfo from './UserInfo';
import UserFollowers from './UserFollowers';

class UserHeader extends React.Component {
  state = {
    likes: data.likes,
    following: data.following,
    followers: data.followers,
    isLikeAdded: false,
    isFollowersAdded: false,
  };
  toggleLike = () => {
    this.setState(prevState => ({
      likes: !this.state.isLikeAdded ?
        [prevState.likes[0], prevState.likes[1] + 1] :
        [prevState.likes[0], prevState.likes[1] - 1],
      isLikeAdded: !prevState.isLikeAdded,
    }));
  }
  toggleFollowers = () => {
    this.setState(prevState => ({
      followers: !this.state.isFollowersAdded ?
        [prevState.followers[0], prevState.followers[1] + 1] :
        [prevState.followers[0], prevState.followers[1] - 1],
      isFollowersAdded: !prevState.isFollowersAdded,
    }));
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
