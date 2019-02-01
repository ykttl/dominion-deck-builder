import { SELECT_CARD, REMOVE_CARD, NAME_DECK } from '../actions/action';

const initialState = {
  deck: [],
  deckName: '',
  errorMessage: ''
};

const deck = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CARD:
      if (state.deck.includes(action.card)) {
        return {
          ...state,
          deck: state.deck,
          errorMessage: `${action.card} is already selected.`
        };
      }
      if (state.deck.length === 10) {
        return {
          ...state,
          deck: state.deck,
          errorMessage: "You've already selected 10 cards :)"
        };
      }
      return {
        ...state,
        deck: [...state.deck, action.card],
        errorMessage: ''
      };
    case NAME_DECK:
      return {
        ...state,
        deckName: action.name
      };
    case REMOVE_CARD:
      return {
        ...state,
        deck: state.deck.filter(x => x !== action.card),
        errorMessage: ''
      };
    default:
      return state;
  }
};

export default deck;
