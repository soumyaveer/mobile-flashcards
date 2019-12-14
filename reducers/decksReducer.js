const decksReducer = (state = {}, action) => {
  switch (action.type) {
    // load all the decks in the list
    case 'LOAD_DECKS':
      return action.decks;

    // add a new deck to the decklist
    case 'ADD_DECK':
      const deckId = action.deck.id;
      const newDeck = {
        ...state,
        [deckId]: {
          ...state[deckId],
          ...action.deck
        }
      };
      return newDeck;

    // add a new question to a deck
    case'ADD_QUESTION':
      const newState = {
        ...state,
        [action.deckId]: {
          ...state[action.deckId],
          questions: [
            ...state[action.deckId].questions,
            { question: action.card.question, answer: action.card.answer }
          ]
        }
      };
      return newState;

    //return default state if none of the actions above are true
    default:
      return state;
  }
};

export default decksReducer;