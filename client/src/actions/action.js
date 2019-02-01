export const SELECT_CARD = 'SELECT_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const NAME_DECK = 'NAME_DECK';

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
