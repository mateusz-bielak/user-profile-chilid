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

test('should hide comments', () => {
  const wrapper = shallow(<UserComments />);
  wrapper.find('button').simulate('click');
  expect(wrapper.state('areCommentsVisible')).toBe(false);
  expect(wrapper.find('div').at(1).hasClass('user_comments__scroll--display')).toBe(true);
  expect(wrapper.find('button').text()).toBe('Show comments (2)');
});

test('should show comments', () => {
  const wrapper = shallow(<UserComments />);

  // Make sure that comments are hidden
  wrapper.setState({ areCommentsVisible: false });
  expect(wrapper.find('div').at(1).hasClass('user_comments__scroll--display')).toBe(true);

  // Show comments
  wrapper.find('button').simulate('click');
  expect(wrapper.state('areCommentsVisible')).toBe(true);
  expect(wrapper.find('div').at(1).hasClass('user_comments__scroll--display')).toBe(false);
});
