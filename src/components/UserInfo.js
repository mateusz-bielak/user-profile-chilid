import PropTypes from 'prop-types';
import React from 'react';
import data from '../../storage/data.json';

class UserInfo extends React.Component {
  state = {
    user_photo: data.user_photo,
    user_name: data.user_name,
    user_location: data.user_location,
    link: data.link,
    showLink: false,
  }
  showLink = () => {
    this.setState({ showLink: !this.state.showLink });
  }
  render() {
    const showLinkClass = ['user_info__link'];
    if (this.state.showLink) {
      showLinkClass.push('user_info__link--display');
    }
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
        <div className={showLinkClass.join(' ')}>
          { this.state.link }
        </div>
      </div>
    );
  }
}

UserInfo.propTypes = {
  toggleLike: PropTypes.func.isRequired,
};

export default UserInfo;
