// babel src\user-profile.jsx --out-file=public\scripts\user-profile.js --presets=env,react --watch
// live-server public

class UserProfile extends React.Component {
  render() {
    return (
      <div className="user_profile">
        <UserHeader />
        <UserComments />
      </div>
      );
  };
}

class UserHeader extends React.Component {
  constructor(props) {
    super(props);
    const isLikeAdded = false;
    const isFollowersAdded = false;
    this.toggleLike = this.toggleLike.bind(this);
    this.toggleFollowers = this.toggleFollowers.bind(this);
    this.state = {
      likes: ["Likes", 121],
      following: ["Following", 723],
      followers: ["Followers", 4433]
    };
  };
  toggleLike() {
    this.setState((prevState) => {
      if (this.isLikeAdded) {
        return {
          likes: [prevState.likes[0], prevState.likes[1] + 1]
        };
      } else {
        return {
          likes: [prevState.likes[0], prevState.likes[1] - 1]
        };
      }
    });
    this.isLikeAdded = !this.isLikeAdded;
  };
  toggleFollowers() {
    this.setState((prevState) => {
      if (this.isFollowersAdded) {
        return {
          followers: [prevState.followers[0], prevState.followers[1] + 1]
        };
      } else {
        return {
          followers: [prevState.followers[0], prevState.followers[1] - 1]
        };
      }
    });
    this.isFollowersAdded = !this.isFollowersAdded;
  };
  render() {
    return (
      <div className="user_header">
        <UserInfo toggleLike={ this.toggleLike } />
        <UserFollowers likes={ this.state.likes } following={ this.state.following } followers={ this.state.followers } toggleFollowers={ this.toggleFollowers } />
      </div>
      );
  };
}

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_photo: "http://via.placeholder.com/70x70",
      user_name: "Greg Miserandino",
      user_location: "Philadelphia"
    };
  };
  render() {
    return (
      <div className="user_header__info">
        <img className="user_header__photo" src={ this.state.user_photo } alt="user.jpg" />
        <p className="user_header__name">
          { this.state.user_name }
          <button className="user_header__like" onClick={ this.props.toggleLike }>
            <i className="fa fa-heart-o" aria-hidden="true"></i>
          </button>
        </p>
        <p className="user_header__location">
          { this.state.user_location }
        </p>
        { /*You have to attach font awesome in your html file, or provide your own icons*/ }
        <button className="user_header__share">
          <i className="fa fa-share-square-o" aria-hidden="true"></i>
        </button>
      </div>
      );
  };
}

class UserFollowers extends React.Component {
  render() {
    return (
      <div className="user_header__followers">
        <div className="user_header__stats">
          <UserFollowersCounter user_stats={ this.props.likes } />
          <UserFollowersCounter user_stats={ this.props.following } />
          <UserFollowersCounter user_stats={ this.props.followers } />
        </div>
        <button className="user_header__follow" onClick={ this.props.toggleFollowers }>Follow</button>
      </div>
      );
  };
}

class UserFollowersCounter extends React.Component {
  render() {
    return (
      <div className="user_header__box">
        <p className="user_header__box_values">
          { this.props.user_stats[1] }
        </p>
        <p className="user_header__box_names">
          { this.props.user_stats[0] }
        </p>
      </div>
      );
  };
}

class UserComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ["http://via.placeholder.com/40x40", "Mike Ross", "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.", "1d"]
    };
  };
  render() {
    return (
      <div>
        <button>Hide comments</button>
        <UserComment comment={ this.state.comment } />
        <input type="text" />
      </div>
      );
  };
}

class UserComment extends React.Component {
  render() {
    return (
      <div>
        <img src={ this.props.comment[0] } alt="user.jpg" />
        <p>
          { this.props.comment[1] }
        </p>
        <p>
          { this.props.comment[2] }
        </p>
        <p>
          { this.props.comment[3] }
        </p>
      </div>
      );
  };
}
// Set your location for User Profile component below
ReactDOM.render(<UserProfile />, document.querySelector("#app"));