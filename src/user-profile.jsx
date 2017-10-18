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
  render() {
    return (
      <div className="user-header">
        <UserInfo />
        <UserFollowers />
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
      <div className="user-header__info">
        <img src={ this.state.user_photo } alt="user.jpg" />
        <p className="user-header__name">
          { this.state.user_name }
        </p>
        <p className="user-header__location">
          { this.state.user_location }
        </p>
        { /*You have to attach font awesome in your html file,
                                                                                                                                                                                        or provide your own icons*/ }
        <i class="user-header__like fa fa-heart-o" aria-hidden="true"></i>
        <i class="user-header__share fa fa-share-square-o" aria-hidden="true"></i>
      </div>
      );
  };
}

class UserFollowers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: ["Likes", 121],
      following: ["Following", 723],
      followers: ["Followers", 4433]
    };
  };
  render() {
    return (
      <div>
        <div className="user-header__followers">
          <UserFollowersCounter user_stats={ this.state.likes } />
          <UserFollowersCounter user_stats={ this.state.following } />
          <UserFollowersCounter user_stats={ this.state.followers } />
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