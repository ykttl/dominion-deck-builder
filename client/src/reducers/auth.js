import { FETCH_USER, ERROR_MESSAGE } from '../actions/action';

const initialState = { user: null, message: null };

const auth = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, user: action.userData || false };
    case ERROR_MESSAGE:
      return { ...state, message: action.message || false };
    default:
      return state;
  }
};

export default auth;
