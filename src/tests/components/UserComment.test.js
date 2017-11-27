import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import UserComment from '../../components/UserComment';
import data from '../fixtures/comments.json';

test('should render UserComment', () => {
  const comment = data.comments[0];
  comment.date = moment().add(3, 'days');
  const wrapper = shallow(<UserComment comment={comment} />);
  expect(wrapper).toMatchSnapshot();
});
