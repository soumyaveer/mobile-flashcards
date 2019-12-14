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
  return (dispatch) => {
    return (
      saveDeckTitle(title)
        .then((deck) => dispatch(addDeck(deck)))
        .catch(error => console.warn('Error in handleAddDeck:', error))
    )
  }
};

const addQuestion = (deckId, card) => {
  return {
    type: 'ADD_QUESTION',
    deckId,
    card
  }
};

export const handleAddQuestionToDeck = (deckId, card) => {
  return (dispatch) => {
    dispatch(addQuestion(deckId, card))
    return (
      addQuestionToDeck(deckId, card)
        .catch(error => console.warn('Error in handleAddDeck:', error))
    );
  }
};