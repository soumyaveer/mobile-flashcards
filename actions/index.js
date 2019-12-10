import { getDecks, saveDeckTitle, addQuestionToDeck } from "../utils/api";

const loadDecks = (decks) => {
  return {
    type: 'LOAD_DECKS',
    decks
  }
};

export const handleLoadingDecks = () => {
  return (dispatch) => {
    getDecks()
      .then(decks => dispatch(loadDecks(decks)))
  }
};

const addDeck = (deck) => {
  return {
    type: 'ADD_DECK',
    deck
  }
};

export const handleAddDeck = (title) => {
  console.log("Adding a deck")
  return (dispatch) => {
    dispatch(addDeck(title))
    return (
      saveDeckTitle(title)
        .catch(error => console.warn('Error in handleAddDeck:', error))
    )
  }
};

const addQuestion = (id, card) => {
  return {
    type: 'ADD_QUESTION',
    id,
    card
  }
};

export const handleAddQuestionToDeck = (id, card) => {
  console.log("Adding a card", card);
  console.log("Adding an id", id);
  return (dispatch) => {
    dispatch(addQuestion(id, card))
    return (
      addQuestionToDeck(id, card)
        .then(() => console.log("Added to the Deck" ))
        .catch(error => console.warn('Error in handleAddDeck:', error))
    );
  }
};