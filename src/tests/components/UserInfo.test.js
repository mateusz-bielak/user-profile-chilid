import React from 'react';
import { shallow } from 'enzyme';
import UserInfo from '../../components/UserInfo';

let toggleLike;
let wrapper;

beforeEach(() => {
  toggleLike = jest.fn();
  wrapper = shallow(<UserInfo toggleLike={toggleLike} />);
});

test('should render UserInfo correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should show share link', () => {
  wrapper.find('.user_info__share').simulate('click');
  expect(wrapper.find('.user_info__link').hasClass('user_info__link--display')).toBe(true);
});

test('should hide share link', () => {
  wrapper.setState({ showLink: true });
  wrapper.find('.user_info__share').simulate('click');
  expect(wrapper.find('.user_info__link').hasClass('user_info__link--display')).toBe(false);
});
