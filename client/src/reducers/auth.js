import { FETCH_USER, ERROR_MESSAGE } from '../actions/request';

const initialState = { user: null, errorMessage: null };

const auth = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, user: action.userData || false };
    case ERROR_MESSAGE:
      return { ...state, errorMessage: action.message || false };
    default:
      return state;
  }
};

export default auth;
