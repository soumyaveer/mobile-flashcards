import {getDecks} from "../utils/api";

const loadDecks = (decks) => {
  return {
    type: 'LOAD_DECKS',
    decks
  }
};

export const handleLoadingDecks = () => {
  return (dispatch) => {
    getDecks()
      .then(decks => dispatch(loadDecks))
  }
};

export const addDeck = (deck) => {
  return {
    type: 'ADD_DECK',
    deck
  }
};

export const addQuestionToDeck = ({deck, card}) => {
  return {
    type: 'ADD_QUESTION',
    deck,
    card
  }
};