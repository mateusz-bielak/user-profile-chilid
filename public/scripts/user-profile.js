"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// babel src\user-profile.jsx --out-file=public\scripts\user-profile.js --presets=env,react --watch
// live-server public

var UserProfile = function (_React$Component) {
  _inherits(UserProfile, _React$Component);

  function UserProfile() {
    _classCallCheck(this, UserProfile);

    return _possibleConstructorReturn(this, (UserProfile.__proto__ || Object.getPrototypeOf(UserProfile)).apply(this, arguments));
  }

  _createClass(UserProfile, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "user_profile" },
        React.createElement(UserHeader, null),
        React.createElement(UserComments, null)
      );
    }
  }]);

  return UserProfile;
}(React.Component);

var UserHeader = function (_React$Component2) {
  _inherits(UserHeader, _React$Component2);

  function UserHeader(props) {
    _classCallCheck(this, UserHeader);

    var _this2 = _possibleConstructorReturn(this, (UserHeader.__proto__ || Object.getPrototypeOf(UserHeader)).call(this, props));

    var isLikeAdded = false;
    var isFollowersAdded = false;
    _this2.toggleLike = _this2.toggleLike.bind(_this2);
    _this2.toggleFollowers = _this2.toggleFollowers.bind(_this2);
    _this2.state = {
      likes: ["Likes", 121],
      following: ["Following", 723],
      followers: ["Followers", 4433]
    };
    return _this2;
  }

  _createClass(UserHeader, [{
    key: "toggleLike",
    value: function toggleLike() {
      var _this3 = this;

      this.setState(function (prevState) {
        if (_this3.isLikeAdded) {
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
    }
  }, {
    key: "toggleFollowers",
    value: function toggleFollowers() {
      var _this4 = this;

      this.setState(function (prevState) {
        if (_this4.isFollowersAdded) {
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
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "user_header" },
        React.createElement(UserInfo, { toggleLike: this.toggleLike }),
        React.createElement(UserFollowers, { likes: this.state.likes, following: this.state.following, followers: this.state.followers, toggleFollowers: this.toggleFollowers })
      );
    }
  }]);

  return UserHeader;
}(React.Component);

var UserInfo = function (_React$Component3) {
  _inherits(UserInfo, _React$Component3);

  function UserInfo(props) {
    _classCallCheck(this, UserInfo);

    var _this5 = _possibleConstructorReturn(this, (UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).call(this, props));

    _this5.state = {
      user_photo: "http://via.placeholder.com/70x70",
      user_name: "Greg Miserandino",
      user_location: "Philadelphia"
    };
    return _this5;
  }

  _createClass(UserInfo, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "user_info" },
        React.createElement("img", { className: "user_info__photo", src: this.state.user_photo, alt: "user.jpg" }),
        React.createElement(
          "p",
          { className: "user_info__name" },
          this.state.user_name,
          React.createElement(
            "button",
            { className: "user_info__like", onClick: this.props.toggleLike },
            React.createElement("i", { className: "fa fa-heart-o", "aria-hidden": "true" })
          )
        ),
        React.createElement(
          "p",
          { className: "user_info__location" },
          this.state.user_location
        ),
        React.createElement(
          "button",
          { className: "user_info__share" },
          React.createElement("i", { className: "fa fa-share-square-o", "aria-hidden": "true" })
        )
      );
    }
  }]);

  return UserInfo;
}(React.Component);

var UserFollowers = function (_React$Component4) {
  _inherits(UserFollowers, _React$Component4);

  function UserFollowers() {
    _classCallCheck(this, UserFollowers);

    return _possibleConstructorReturn(this, (UserFollowers.__proto__ || Object.getPrototypeOf(UserFollowers)).apply(this, arguments));
  }

  _createClass(UserFollowers, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "user_followers" },
        React.createElement(
          "div",
          { className: "user_followers__stats" },
          React.createElement(UserFollowersCounter, { user_stats: this.props.likes }),
          React.createElement(UserFollowersCounter, { user_stats: this.props.following }),
          React.createElement(UserFollowersCounter, { user_stats: this.props.followers })
        ),
        React.createElement(
          "button",
          { className: "user_followers__button", onClick: this.props.toggleFollowers },
          "Follow"
        )
      );
    }
  }]);

  return UserFollowers;
}(React.Component);

var UserFollowersCounter = function (_React$Component5) {
  _inherits(UserFollowersCounter, _React$Component5);

  function UserFollowersCounter() {
    _classCallCheck(this, UserFollowersCounter);

    return _possibleConstructorReturn(this, (UserFollowersCounter.__proto__ || Object.getPrototypeOf(UserFollowersCounter)).apply(this, arguments));
  }

  _createClass(UserFollowersCounter, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "user_followers__box" },
        React.createElement(
          "p",
          { className: "user_followers__values" },
          this.props.user_stats[1]
        ),
        React.createElement(
          "p",
          { className: "user_followers__names" },
          this.props.user_stats[0]
        )
      );
    }
  }]);

  return UserFollowersCounter;
}(React.Component);

var UserComments = function (_React$Component6) {
  _inherits(UserComments, _React$Component6);

  function UserComments(props) {
    _classCallCheck(this, UserComments);

    var _this8 = _possibleConstructorReturn(this, (UserComments.__proto__ || Object.getPrototypeOf(UserComments)).call(this, props));

    _this8.state = {
      comment: ["http://via.placeholder.com/40x40", "Mike Ross", "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.", "1d"]
    };
    return _this8;
  }

  _createClass(UserComments, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          null,
          "Hide comments"
        ),
        React.createElement(UserComment, { comment: this.state.comment }),
        React.createElement("input", { type: "text" })
      );
    }
  }]);

  return UserComments;
}(React.Component);

var UserComment = function (_React$Component7) {
  _inherits(UserComment, _React$Component7);

  function UserComment() {
    _classCallCheck(this, UserComment);

    return _possibleConstructorReturn(this, (UserComment.__proto__ || Object.getPrototypeOf(UserComment)).apply(this, arguments));
  }

  _createClass(UserComment, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement("img", { src: this.props.comment[0], alt: "user.jpg" }),
        React.createElement(
          "p",
          null,
          this.props.comment[1]
        ),
        React.createElement(
          "p",
          null,
          this.props.comment[2]
        ),
        React.createElement(
          "p",
          null,
          this.props.comment[3]
        )
      );
    }
  }]);

  return UserComment;
}(React.Component);
// Set your location for User Profile component below


ReactDOM.render(React.createElement(UserProfile, null), document.querySelector("#app"));
