import React from 'react';
import { shallow } from 'enzyme';
import UserHeader from '../../components/UserHeader';

test('should render UserHeader', () => {
  const wrapper = shallow(<UserHeader />);
  expect(wrapper).toMatchSnapshot();
});

test('should likes toggle button', () => {
  const likes = ['Likes', 100];
  const newLikes = ['Likes', 101];
  const wrapper = shallow(<UserHeader />);
  wrapper.setState({ likes });

  // add like
  wrapper.find('UserInfo').prop('toggleLike')();
  expect(wrapper.state('likes')).toEqual(newLikes);
  expect(wrapper.state('isLikeAdded')).toBe(true);

  // subtract like
  wrapper.find('UserInfo').prop('toggleLike')();
  expect(wrapper.state('likes')).toEqual(likes);
  expect(wrapper.state('isLikeAdded')).toBe(false);
});

test('should followers toggle button', () => {
  const followers = ['Followers', 630];
  const newFollowers = ['Followers', 631];
  const wrapper = shallow(<UserHeader />);
  wrapper.setState({ followers });

  // add follower
  wrapper.find('UserFollowers').prop('toggleFollowers')();
  expect(wrapper.state('followers')).toEqual(newFollowers);
  expect(wrapper.state('isFollowersAdded')).toBe(true);

  // subtract follower
  wrapper.find('UserFollowers').prop('toggleFollowers')();
  expect(wrapper.state('followers')).toEqual(followers);
  expect(wrapper.state('isFollowersAdded')).toBe(false);
});
