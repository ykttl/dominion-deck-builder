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
