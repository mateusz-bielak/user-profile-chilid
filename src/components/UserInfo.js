import React from 'react';
import data from '../../storage/data.json';

class UserInfo extends React.Component {
  state = {
    user_photo: data.user_photo,
    user_name: data.user_name,
    user_location: data.user_location,
    link: data.link,
  };
  showLink = () => {
    const element = document.querySelector('.user_info__link');
    element.classList.toggle('user_info__link--display');
  }
  render() {
    return (
      <div className="user_info">
        <div className="user_info__container">
          <div className="user_info__photo" style={{ backgroundImage: `url(${this.state.user_photo})` }} alt="user.jpg" />
          <div className="user_info__box">
            <p className="user_info__name">
              { this.state.user_name }
              <button className="user_info__like" onClick={this.props.toggleLike}>
                <i className="fa fa-heart-o" aria-hidden="true" />
              </button>
            </p>
            <p className="user_info__location">
              { this.state.user_location }
            </p>
          </div>
        </div>
        <button onClick={this.showLink} className="user_info__share">
          <i className="fa fa-share-square-o" aria-hidden="true" />
        </button>
        <div className="user_info__link">
          { this.state.link }
        </div>
      </div>
    );
  }
}

export default UserInfo;
