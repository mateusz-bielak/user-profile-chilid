import React from 'react';
import { shallow } from 'enzyme';
import UserFollowers from '../../components/UserFollowers';

test('should render UserFollowers', () => {
  const userStats = {
    likes: ['Likes', 300],
    following: ['Following', 70],
    followers: ['Followers', 1100],
  };
  const toggleFollowers = () => {};
  const wrapper = shallow(<UserFollowers {...userStats} toggleFollowers={toggleFollowers} />);
  expect(wrapper).toMatchSnapshot();
});
