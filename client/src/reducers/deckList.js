import { SAVE_DECK, FETCH_DECKLIST, REMOVE_DECK } from '../actions/action';

const initialState = {
  deckListFromServer: []
};

const deckList = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DECK:
      return {
        ...state,
        deckListFromServer: action.deck
      };
    case FETCH_DECKLIST:
      return {
        ...state,
        deckListFromServer: action.deckList
      };
    case REMOVE_DECK:
      return {
        ...state,
        deckListFromServer: action.deckList
      };
    default:
      return state;
  }
};

export default deckList;
