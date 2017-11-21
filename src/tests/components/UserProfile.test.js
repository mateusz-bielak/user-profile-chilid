import React from 'react';
import { shallow } from 'enzyme';
import UserProfile from '../../components/UserProfile';

test('should render UserProfile correctly', () => {
  const wrapper = shallow(<UserProfile />);
  expect(wrapper).toMatchSnapshot();
});
