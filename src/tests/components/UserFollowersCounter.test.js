import React from 'react';
import { shallow } from 'enzyme';
import UserFollowersCounter from '../../components/UserFollowersCounter';

test('should render UserFollowersCounter', () => {
  const userStats = ['Stat', '25'];
  const wrapper = shallow(<UserFollowersCounter userStats={userStats} />);
  expect(wrapper).toMatchSnapshot();
});
