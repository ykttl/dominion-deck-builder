// import * as action from '../actions/requests';
// import thunk from 'redux-thunk';
// import fetchMock from 'fetch-mock';
// import configureMockStore from 'redux-mock-store';

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

// describe('async actions', () => {
//   afterEach(() => {
//     fetchMock.restore();
//   });
//   it('creates FETCH_USER after fetching user has been done', () => {
//     fetchMock.getOnce('');
//   });
//   const expectedActions = [
//     { type: FETCH_USER, userData: res.data },
//     { type: ERROR_MESSAGE, message: message }
//   ];
//   const store = mockStore({ userData: '', message: '' });
//   return store.dispatch(action.fetchUser()).then(() => {
//     expect(store.getActions()).toEqual(expectedActions);
//   });
// });

//it('', () => {
// const mockDeck = ['test1', 'test2', 'test3'];
// const wrapper = shallow(<Sidebar deck={mockDeck} />);
// wrapper.instance().renderCardName(mockDeck);
// expect(wrapper.find('.list-item').length).toBe(3);
//});
