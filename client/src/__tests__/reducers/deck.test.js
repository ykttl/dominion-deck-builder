import reducer from '../../reducers/deck';
import * as action from '../../actions/action';

const initialState = {
  deck: [],
  deckName: '',
  errorMessage: ''
};

describe('deck reducer', () => {
  it('should handle SELECT_CARD', () => {
    expect(
      reducer(initialState, {
        type: action.SELECT_CARD,
        card: 'card-1'
      })
    ).toEqual({
      deck: ['card-1'],
      deckName: '',
      errorMessage: ''
    });
    expect(
      reducer(
        {
          deck: ['card-1'],
          deckName: '',
          errorMessage: ''
        },
        { type: action.SELECT_CARD, card: 'card-2' }
      )
    ).toEqual({
      deck: ['card-1', 'card-2'],
      deckName: '',
      errorMessage: ''
    });
  });

  it('should return error message if already 10 cards are selected', () => {
    expect(
      reducer(
        {
          deck: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          deckName: '',
          errorMessage: ''
        },
        { type: action.SELECT_CARD, card: 'card-11' }
      )
    ).toEqual({
      deck: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      deckName: '',
      errorMessage: "You've already selected 10 cards :)"
    });
  });

  it('should return error message if the same card is selected', () => {
    expect(
      reducer(
        {
          deck: ['card-1'],
          deckName: '',
          errorMessage: ''
        },
        { type: action.SELECT_CARD, card: 'card-1' }
      )
    ).toEqual({
      deck: ['card-1'],
      deckName: '',
      errorMessage: 'card-1 is already selected.'
    });
  });

  it('should handle NAME_DECK', () => {
    expect(
      reducer(
        {
          deck: ['card-1', 'card-2'],
          deckName: '',
          errorMessage: ''
        },
        { type: action.NAME_DECK, name: 'new deck' }
      )
    ).toEqual({
      deck: ['card-1', 'card-2'],
      deckName: 'new deck',
      errorMessage: ''
    });
  });

  it('should handle REMOVE_CARD', () => {
    expect(
      reducer(
        {
          deck: ['card-1', 'card-2'],
          deckName: 'new deck',
          errorMessage: ''
        },
        { type: action.REMOVE_CARD, card: 'card-1' }
      )
    ).toEqual({
      deck: ['card-2'],
      deckName: 'new deck',
      errorMessage: ''
    });
  });
});
