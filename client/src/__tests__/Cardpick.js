import React from 'react';
import { Selectors } from '../components/CardPick/Selectors';
import { Cards } from '../components/CardPick/Cards';
import { Sidebar } from '../components/CardPick/Sidebar';
import Select from 'react-select';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Selector', () => {
  it('should call function passed from parent component as props', () => {
    const propsFunc = jest.fn();
    const wrapper = shallow(<Selectors selectExpansion={propsFunc} />);
    const event = { value: 'test' };
    wrapper
      .find(Select)
      .first()
      .simulate('change', event);
    expect(propsFunc).toHaveBeenCalledWith(event);
  });
});
describe('Cards', () => {
  it('changes state by using selectors', () => {
    const wrapper = shallow(<Cards />);
    const event = { value: 'test' };
    wrapper.instance().selectExpansion(event);
    expect(wrapper.state().expansion).toEqual('test');
  });
  it('renders sorted cards by selectors', () => {
    const wrapper = shallow(<Cards />);
    wrapper.setState({
      expansion: 'base',
      cost: 4,
      type: 'attack'
    });
    expect(wrapper.find('.card-img').length).toBe(4);
  });
  it('should call dispatch function', () => {
    const dispatchFunc = jest.fn();
    const wrapper = shallow(<Cards selectCard={dispatchFunc} />);
    wrapper
      .find('.card-img')
      .first()
      .simulate('click', dispatchFunc);
    expect(dispatchFunc).toHaveBeenCalled();
  });
});

//it('', () => {
// const mockDeck = ['test1', 'test2', 'test3'];
// const wrapper = shallow(<Sidebar deck={mockDeck} />);
// wrapper.instance().renderCardName(mockDeck);
// expect(wrapper.find('.list-item').length).toBe(3);
//});
