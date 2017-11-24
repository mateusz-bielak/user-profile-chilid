import React from 'react';
import { shallow } from 'enzyme';
import UserComments from '../../components/UserComments';

test('should render UserComments', () => {
  const wrapper = shallow(<UserComments />);
  expect(wrapper).toMatchSnapshot();
});

test('should handle comment adding', () => {
  const wrapper = shallow(<UserComments />);
  wrapper.setState({ comments: [] });
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
    target: {
      elements: {
        comment: { value: 'My commentary' },
      },
    },
  });
  const newComment = wrapper.state('comments');
  expect(newComment[0].content).toBe('My commentary');
});

test('should not add comment when no value provided', () => {
  const wrapper = shallow(<UserComments />);
  wrapper.setState({ comments: [] });
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
    target: {
      elements: {
        comment: { value: '' },
      },
    },
  });
  expect(wrapper.state('comments')).toHaveLength(0);
});
