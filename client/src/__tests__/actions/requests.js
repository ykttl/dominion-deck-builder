import mockAxios from 'axios';
import { fetchUser } from '../../actions/request';

describe('axios', () => {
  it('calls axios', () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {}
      })
    );

    const dispatch = jest.fn();
    fetchUser()(dispatch);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith('/api/current_user');
  });
});

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
