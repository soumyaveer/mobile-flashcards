import { getDecks, saveDeckTitle, addCardToDeck } from "../utils/api";

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

const addCard = ({id, card}) => {
  return {
    type: 'ADD_CARD',
    id,
    card
  }
};

export const handleAddCardToDeck = ({id, card}) => {
  console.log("Adding a card")
  return (dispatch) => {
    dispatch(addCard({id, card}))
    return (
      addCardToDeck({id, card})
        .catch(error => console.warn('Error in handleAddDeck:', error))
    )
  }
};