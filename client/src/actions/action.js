import axios from 'axios';
export const SELECT_CARD = 'SELECT_CARD';
export const NAME_DECK = 'NAME_DECK';
export const SAVE_DECK = 'SAVE_DECK';
export const REMOVE_CARD = 'REMOVE_CARD';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_DECKLIST = 'FETCH_DECKLIST';
export const REMOVE_DECK = 'REMOVE_DECK';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';

// ===== requests to server ======
export const fetchUser = message => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, userData: res.data });
  dispatch({ type: ERROR_MESSAGE, message: message });
};

export const fetchDeckList = () => async dispatch => {
  const res = await axios.get('/api/get_deck_list');
  dispatch({ type: FETCH_DECKLIST, deckList: res.data });
};

export const removeDeck = id => async dispatch => {
  const res = await axios.post('/api/remove_deck', { oid: id });
  dispatch({ type: REMOVE_DECK, deckList: res.data });
};

export const saveDeck = data => async dispatch => {
  const deck = {
    cards: data.deck,
    deckName: data.deckName
  };
  const res = await axios.post('/api/save_deck_list', deck);
  dispatch({ type: SAVE_DECK, deck: res.data });
};

// ===== Other =====
export const removeCard = card => {
  return {
    type: REMOVE_CARD,
    card
  };
};

export const selectCard = card => {
  return {
    type: SELECT_CARD,
    card
  };
};

export const nameDeck = name => {
  return {
    type: NAME_DECK,
    name
  };
};
