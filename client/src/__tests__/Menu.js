import React from 'react';
import { Menu } from '../components/Menu';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Menu bar items', () => {
  it('always renders cardpick and decklist', () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper.find('.cardpick').length).toBe(1);
    expect(wrapper.find('.decklist').length).toBe(1);
  });

  it('renders logout if user is logged in', () => {
    const wrapper = shallow(<Menu />);
    wrapper.setProps({
      user: true
    });
    expect(wrapper.find('.logout').length).toBe(1);
  });

  it('renders sign-up and login when user is logged out', () => {
    const wrapper = shallow(<Menu />);
    wrapper.setProps({
      user: false
    });
    expect(wrapper.find('.signup').length).toBe(1);
    expect(wrapper.find('.login').length).toBe(1);
  });
});
