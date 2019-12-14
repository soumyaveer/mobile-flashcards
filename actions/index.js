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
  console.log('Getting deck title', deck)
  return {
    type: 'ADD_DECK',
    deck
  }
};

export const handleAddDeck = (title) => {
  console.log("Adding a deck")
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
  console.log("Adding a card", card);
  console.log("Adding an id", deckId);
  return (dispatch) => {
    dispatch(addQuestion(deckId, card))
    return (
      addQuestionToDeck(deckId, card)
        .then(() => console.log("Added to the Deck"))
        .catch(error => console.warn('Error in handleAddDeck:', error))
    );
  }
};