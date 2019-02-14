import React from 'react';
import { Selectors } from '../components/CardPick/Selectors';
import { Cards } from '../components/CardPick/Cards';
import Select from 'react-select';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('if callback in selector works', () => {
  const mock = jest.fn();
  const wrapper = shallow(<Selectors selectExpansion={mock} />);
  const event = { value: 'test' };
  wrapper
    .find(Select)
    .first()
    .simulate('change', event);
  expect(mock).toHaveBeenCalledWith(event);
});
it('setState will be called after using selectors', () => {
  const wrapper = shallow(<Cards />);
  //const setStateSpy = jest.spyOn(Cards.prototype, 'setState');
  // wrapper.setState({
  //   expansion: 'test'
  // });
  const event = { value: 'test' };
  wrapper.instance().selectExpansion(event);
  expect(wrapper.state.expansion).toEqual('test');
});
// const setStateSpy = jest.spyOn(App.prototype, 'setState');
// /** setStateしてthis.state.inputValueの値を'XXX'に更新 */
// wrapper.setState({
//   inputValue: 'XXX',
// });

// // == 実行 ==
// /** handleClick()を呼び出す */
// wrapper.instance().handleClick();

// // == 検証 ==
// /** 適切な引数でspy化したsetStateが呼び出されていればOK */
// expect(setStateSpy).toHaveBeenCalledWith({
//   text: 'XXX',
//   inputValue: '',
// });
