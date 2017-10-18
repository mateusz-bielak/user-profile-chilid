// babel src\user-profile.jsx --out-file=public\scripts\user-profile.js --presets=env,react --watch
// live-server public

class UserProfile extends React.Component {
  render() {
    return (
      <div>
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
    this.toggleLike = this.toggleLike.bind(this);
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
  render() {
    return (
      <div className="user_header">
        <UserInfo toggleLike={ this.toggleLike } />
        <UserFollowers likes={ this.state.likes } following={ this.state.following } followers={ this.state.followers } />
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
        <img src={ this.state.user_photo } alt="user.jpg" />
        <p className="user_header__name">
          { this.state.user_name }
        </p>
        <p className="user_header__location">
          { this.state.user_location }
        </p>
        { /*You have to attach font awesome in your html file, or provide your own icons*/ }
        <button onClick={ this.props.toggleLike }>
          <i class="user_header__like fa fa-heart-o" aria-hidden="true"></i>
        </button>
        <button>
          <i class="user_header__share fa fa-share-square-o" aria-hidden="true"></i>
        </button>
      </div>
      );
  };
}

class UserFollowers extends React.Component {
  render() {
    return (
      <div>
        <div className="user_header__followers">
          <UserFollowersCounter user_stats={ this.props.likes } />
          <UserFollowersCounter user_stats={ this.props.following } />
          <UserFollowersCounter user_stats={ this.props.followers } />
        </div>
        <button>Follow</button>
      </div>
      );
  };
}

class UserFollowersCounter extends React.Component {
  render() {
    return (
      <div>
        <p>
          { this.props.user_stats[0] }
        </p>
        <p>
          { this.props.user_stats[1] }
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
ReactDOM.render(<UserProfile />, document.querySelector("body"));