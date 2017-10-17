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
        null,
        React.createElement(UserHeader, null),
        React.createElement(UserComments, null)
      );
    }
  }]);

  return UserProfile;
}(React.Component);

var UserHeader = function (_React$Component2) {
  _inherits(UserHeader, _React$Component2);

  function UserHeader() {
    _classCallCheck(this, UserHeader);

    return _possibleConstructorReturn(this, (UserHeader.__proto__ || Object.getPrototypeOf(UserHeader)).apply(this, arguments));
  }

  _createClass(UserHeader, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(UserInfo, null),
        React.createElement(UserFollowers, null)
      );
    }
  }]);

  return UserHeader;
}(React.Component);

var UserInfo = function (_React$Component3) {
  _inherits(UserInfo, _React$Component3);

  function UserInfo() {
    _classCallCheck(this, UserInfo);

    return _possibleConstructorReturn(this, (UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).apply(this, arguments));
  }

  _createClass(UserInfo, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement("img", { src: "http://via.placeholder.com/70x70", alt: "user.jpg" }),
        React.createElement(
          "p",
          null,
          "User Name"
        ),
        React.createElement(
          "p",
          null,
          "User Location"
        ),
        React.createElement(
          "i",
          null,
          "Like icon"
        ),
        React.createElement(
          "i",
          null,
          "Share icon"
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
        null,
        React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            null,
            "Likes"
          ),
          React.createElement(
            "p",
            null,
            "121"
          )
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            null,
            "Following"
          ),
          React.createElement(
            "p",
            null,
            "723"
          )
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            null,
            "Followers"
          ),
          React.createElement(
            "p",
            null,
            "4433"
          )
        ),
        React.createElement(
          "button",
          null,
          "Follow"
        )
      );
    }
  }]);

  return UserFollowers;
}(React.Component);

var UserComments = function (_React$Component5) {
  _inherits(UserComments, _React$Component5);

  function UserComments() {
    _classCallCheck(this, UserComments);

    return _possibleConstructorReturn(this, (UserComments.__proto__ || Object.getPrototypeOf(UserComments)).apply(this, arguments));
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
        React.createElement(UserComment, null),
        React.createElement("input", { type: "text" })
      );
    }
  }]);

  return UserComments;
}(React.Component);

var UserComment = function (_React$Component6) {
  _inherits(UserComment, _React$Component6);

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
        React.createElement("img", { src: "http://via.placeholder.com/40x40", alt: "user.jpg" }),
        React.createElement(
          "p",
          null,
          "User name"
        ),
        React.createElement(
          "p",
          null,
          "User comment lorem ipsum......"
        ),
        React.createElement(
          "p",
          null,
          "Date"
        )
      );
    }
  }]);

  return UserComment;
}(React.Component);

ReactDOM.render(React.createElement(UserProfile, null), document.querySelector("#app"));
