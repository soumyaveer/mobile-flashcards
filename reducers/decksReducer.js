const decksReducer = (state = {}, action) => {
  switch (action.type) {
    // load all the decks in the list
    case 'LOAD_DECKS':
      console.log("Inside reducer now", action.decks)
      return action.decks;

    // add a new deck to the decklist
    case 'ADD_DECK':
      console.log('Deck title merging with state', action.deck);
      console.log('Deck titles state as well', state);
      const deckId = action.deck.id;
      const newDeck = {
        ...state,
        [deckId]: {
          ...state[deckId],
          ...action.deck
        }
      };

      console.log('Checking new Deck', newDeck)
      return newDeck

    // add a new question to a deck
    case'ADD_QUESTION':
      console.warn('Action details', action);
      console.warn('Is deck present in the state', state[action.deckId]);
      console.warn("State detail", state);
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

      console.warn("Checking new state in reducer", newState)
      return newState

    //return default state if none of the actions above are true
    default:
      return state;
  }
};

export default decksReducer;