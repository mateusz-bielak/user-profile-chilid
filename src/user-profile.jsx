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
      <div>
        <UserInfo />
        <UserFollowers />
      </div>
      );
  };
}

class UserInfo extends React.Component {
  render() {
    return (
      <div>
        <img src="http://via.placeholder.com/70x70" alt="user.jpg" />
        <p>User Name</p>
        <p>User Location</p>
        <i>Like icon</i>
        <i>Share icon</i>
      </div>
      );
  };
}

class UserFollowers extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p>Likes</p>
          <p>121</p>
        </div>
        <div>
          <p>Following</p>
          <p>723</p>
        </div>
        <div>
          <p>Followers</p>
          <p>4433</p>
        </div>
        <button>Follow</button>
      </div>
      );
  };
}

class UserComments extends React.Component {
  render() {
    return (
      <div>
        <button>Hide comments</button>
        <UserComment />
        <input type="text" />
      </div>
      );
  };
}

class UserComment extends React.Component {
  render() {
    return (
      <div>
        <img src="http://via.placeholder.com/40x40" alt="user.jpg" />
        <p>User name</p>
        <p>User comment lorem ipsum......</p>
        <p>Date</p>
      </div>
      );
  };
}

ReactDOM.render(<UserProfile />, document.querySelector("#app"));