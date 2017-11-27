import React from 'react';
import { shallow } from 'enzyme';
import UserComment from '../../components/UserComment';
import data from '../fixtures/comments.json';

test('should render UserComment', () => {
  const wrapper = shallow(<UserComment comment={data.comments[0]} />);
  expect(wrapper).toMatchSnapshot();
});
