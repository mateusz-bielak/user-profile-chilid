(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// babel src\user-profile.jsx --out-file=public\scripts\user-profile.js --presets=env,react --watch
// watchify public\scripts\user-profile.js -o public\scripts\bundle.js

var json = require("../storage/data.json");

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
        React.createElement("div", { className: "user_profile__background" }),
        React.createElement("div", { className: "user_profile__wrapper" }),
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
      likes: json.likes,
      following: json.following,
      followers: json.followers
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
      user_photo: json.user_photo,
      user_name: json.user_name,
      user_location: json.user_location
    };
    return _this5;
  }

  _createClass(UserInfo, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "user_info" },
        React.createElement("div", { className: "user_info__photo", style: { backgroundImage: "url(" + this.state.user_photo + ")" }, alt: "user.jpg" }),
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

    _this8.addComment = _this8.addComment.bind(_this8);
    _this8.state = {
      comments: json.comments,
      user: json.logged_in
    };
    return _this8;
  }

  _createClass(UserComments, [{
    key: "addComment",
    value: function addComment(e) {
      var _this9 = this;

      e.preventDefault();
      var content = e.target.elements["comma"].value.trim();
      e.target.elements["comma"].value = ""; //Reset text input value
      if (content) {
        this.setState(function (prevState) {
          return {
            comments: prevState.comments.concat([{
              photo: _this9.state.user.photo,
              name: _this9.state.user.user,
              content: content,
              date: new Date()
            }])
          };
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.state.comments.sort(function (a, b) {
        return new Date(a.date) - new Date(b.date);
      });
      return React.createElement(
        "div",
        { className: "user_comments" },
        React.createElement(
          "button",
          { className: "user_comments__hiding" },
          "Hide comments"
        ),
        [this.state.comments.map(function (comment, index) {
          return React.createElement(UserComment, { key: index, comment: comment });
        })],
        React.createElement(
          "form",
          { onSubmit: this.addComment, className: "user_comments__form" },
          React.createElement("input", { className: "user_comments__textbox", type: "text", name: "comma", placeholder: "Add a comment" })
        )
      );
    }
  }]);

  return UserComments;
}(React.Component);

var UserComment = function (_React$Component7) {
  _inherits(UserComment, _React$Component7);

  function UserComment(props) {
    _classCallCheck(this, UserComment);

    var _this10 = _possibleConstructorReturn(this, (UserComment.__proto__ || Object.getPrototypeOf(UserComment)).call(this, props));

    _this10.timeDifference = _this10.timeDifference.bind(_this10);
    return _this10;
  }

  _createClass(UserComment, [{
    key: "timeDifference",
    value: function timeDifference(prevDate) {

      var current = new Date();
      var previous = new Date(prevDate);

      var ms_per_minute = 60 * 1000;
      var ms_per_hour = ms_per_minute * 60;
      var ms_per_day = ms_per_hour * 24;

      var elapsed = current - previous;

      if (elapsed < ms_per_minute) {
        return Math.floor(elapsed / 1000) + "s";
      } else if (elapsed < ms_per_hour) {
        return Math.floor(elapsed / ms_per_minute) + "m";
      } else if (elapsed < ms_per_day) {
        return Math.floor(elapsed / ms_per_hour) + "h";
      } else {
        return Math.floor(elapsed / ms_per_day) + "d";
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "user_comments__container" },
        React.createElement(
          "div",
          { className: "user_comments__photo", style: { backgroundImage: "url(" + this.props.comment.photo + ")" }, alt: "user.jpg" },
          " "
        ),
        React.createElement(
          "div",
          { className: "user_comments__content" },
          React.createElement(
            "p",
            { className: "user_comments__name" },
            this.props.comment.name
          ),
          React.createElement(
            "p",
            { className: "user_comments__commentary" },
            this.props.comment.content
          )
        ),
        React.createElement(
          "p",
          { className: "user_comments__date" },
          this.timeDifference(this.props.comment.date)
        )
      );
    }
  }]);

  return UserComment;
}(React.Component);
// Set your location for User Profile component below


ReactDOM.render(React.createElement(UserProfile, null), document.querySelector("#app"));

},{"../storage/data.json":2}],2:[function(require,module,exports){
module.exports={
  "likes": ["Likes", 121],
  "following": ["Following", 723],
  "followers": ["Followers", 4433],
  "user_photo": "./img/user-photo.jpg",
  "user_name": "Harvey Specter",
  "user_location": "New York, USA",
  "comments": [
    {
      "photo": "./img/user-photo.jpg",
      "name": "Mike Ross",
      "content": "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.",
      "date": "2017-10-22T07:11:00.611Z"
    },
    {
      "photo": "./img/user-photo.jpg",
      "name": "Mike Ross",
      "content": "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.",
      "date": "2017-10-20T12:45:03.564Z"
    }
  ],
  "logged_in": {
    "photo": "./img/user-photo.jpg",
    "user": "Mike Ross"
  }
}
},{}]},{},[1]);
