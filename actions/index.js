import {getDecks} from "../utils/api";

const loadDecks = (decks) => {
  console.log("This is what I got", decks)
  return {
    type: 'LOAD_DECKS',
    decks
  }
};

export const handleLoadingDecks = () => {
  console.log("Am I reaching here?")
  return (dispatch) => {
    getDecks()
      .then(decks => dispatch(loadDecks(decks)))
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