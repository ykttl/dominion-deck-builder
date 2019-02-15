import reducer from '../reducers/auth';
import * as action from '../actions/request';

describe('auth reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      user: null,
      errorMessage: null
    });
  });
  it('should handle FETCH_USER', () => {
    expect(
      reducer([], {
        type: action.FETCH_USER,
        userData: 'user-1'
      })
    ).toEqual({ user: 'user-1' });
  });
  it('should handle ERROR_MESSAGE', () => {
    expect(
      reducer(
        { user: 'user-1' },
        {
          type: action.ERROR_MESSAGE,
          message: 'error-1'
        }
      )
    ).toEqual({ errorMessage: 'error-1', user: 'user-1' });
  });
});
