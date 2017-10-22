const json = require("../storage/data.json");

class UserProfile extends React.Component {
  render() {
    return (
      <div className="user_profile">
        <div className="user_profile__background"></div>
        <div className="user_profile__wrapper"></div>
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
      likes: json.likes,
      following: json.following,
      followers: json.followers
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
      user_photo: json.user_photo,
      user_name: json.user_name,
      user_location: json.user_location,
      link: json.link
    };
  };
  showLink() {
    const element = document.querySelector(".user_info__link");
    element.classList.toggle("user_info__link--display");
  }
  render() {
    return (
      <div className="user_info">
        <div className="user_info__container">
          <div className="user_info__photo" style={ { backgroundImage: `url(${this.state.user_photo})` } } alt="user.jpg"></div>
          <div className="user_info__box">
            <p className="user_info__name">
              { this.state.user_name }
              <button className="user_info__like" onClick={ this.props.toggleLike }>
                <i className="fa fa-heart-o" aria-hidden="true"></i>
              </button>
            </p>
            <p className="user_info__location">
              { this.state.user_location }
            </p>
          </div>
        </div>
        <button onClick={ this.showLink } className="user_info__share">
          <i className="fa fa-share-square-o" aria-hidden="true"></i>
        </button>
        <div className="user_info__link">
          { this.state.link }
        </div>
      </div>
      );
  };
}

class UserFollowers extends React.Component {
  render() {
    return (
      <div className="user_followers">
        <div className="user_followers__stats">
          <UserFollowersCounter user_stats={ this.props.likes } />
          <UserFollowersCounter user_stats={ this.props.following } />
          <UserFollowersCounter user_stats={ this.props.followers } />
        </div>
        <button className="user_followers__button" onClick={ this.props.toggleFollowers }>Follow</button>
      </div>
      );
  };
}

class UserFollowersCounter extends React.Component {
  render() {
    return (
      <div className="user_followers__box">
        <p className="user_followers__values">
          { this.props.user_stats[1] }
        </p>
        <p className="user_followers__names">
          { this.props.user_stats[0] }
        </p>
      </div>
      );
  };
}

class UserComments extends React.Component {
  constructor(props) {
    super(props);
    this.addComment = this.addComment.bind(this);
    this.hide = this.hide.bind(this);
    const areCommentsVisible = true;
    this.state = {
      comments: json.comments,
      user: json.logged_in
    };
  };
  addComment(e) {
    e.preventDefault();
    const content = e.target.elements["comma"].value.trim();
    e.target.elements["comma"].value = ""; //Reset text input value
    if (content) {
      const element = document.querySelector(".user_comments__scroll");
      element.classList.remove("user_comments__scroll--display");
      this.setState((prevState) => {
        return {
          comments: prevState.comments.concat([{
            photo: this.state.user.photo,
            name: this.state.user.user,
            content: content,
            date: new Date()
          }])
        };
      });
    }
  };
  hide() {
    const element = document.querySelector(".user_comments__scroll");
    element.classList.toggle("user_comments__scroll--display");
    const button = document.querySelector(".user_comments__hiding");
    this.areCommentsVisible = !this.areCommentsVisible;
    if (this.areCommentsVisible) {
      button.textContent = `Show comments (${this.state.comments.length})`
    } else {
      button.textContent = `Hide comments (${this.state.comments.length})`
    }
  };
  render() {
    this.state.comments.sort((a, b) => new Date(a.date) - new Date(b.date));
    return (
      <div className="user_comments">
        <button onClick={ this.hide } className="user_comments__hiding">Hide comments (
          { this.state.comments.length })</button>
        <div className="user_comments__scroll">
          { [this.state.comments.map((comment, index) => <UserComment key={ index } comment={ comment } />)] }
        </div>
        <form onSubmit={ this.addComment } className="user_comments__form">
          <input className="user_comments__textbox" type="text" name="comma" placeholder="Add a comment" />
        </form>
      </div>
      );
  };
}
class UserComment extends React.Component {
  constructor(props) {
    super(props);
    this.timeDifference = this.timeDifference.bind(this);
  };
  timeDifference(prevDate) {

    const current = new Date();
    const previous = new Date(prevDate);

    const ms_per_minute = 60 * 1000;
    const ms_per_hour = ms_per_minute * 60;
    const ms_per_day = ms_per_hour * 24;

    const elapsed = current - previous;

    if (elapsed < ms_per_minute) {
      return Math.floor(elapsed / 1000) + "s"
    } else if (elapsed < ms_per_hour) {
      return Math.floor(elapsed / ms_per_minute) + "m"
    } else if (elapsed < ms_per_day) {
      return Math.floor(elapsed / ms_per_hour) + "h"
    } else {
      return Math.floor(elapsed / ms_per_day) + "d"
    }
  };
  render() {
    return (
      <div className="user_comments__container">
        <div className="user_comments__photo" style={ { backgroundImage: `url(${this.props.comment.photo})` } } alt="user.jpg"> </div>
        <div className="user_comments__content">
          <p className="user_comments__name">
            { this.props.comment.name }
          </p>
          <p className="user_comments__commentary">
            { this.props.comment.content }
          </p>
        </div>
        <p className="user_comments__date">
          { this.timeDifference(this.props.comment.date) }
        </p>
      </div>
      );
  };
}
// Set your location for User Profile component below
ReactDOM.render(<UserProfile />, document.querySelector("#app"));