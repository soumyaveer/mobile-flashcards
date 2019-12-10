const decksReducer = (state = {}, action) => {
  switch (action.type) {
    // load all the decks in the list
    case 'LOAD_DECKS':
      console.log("Inside reducer now", action.decks)
      return action.decks;

    // add a new deck to the decklist
    case 'ADD_DECK':
      return {
        ...state,
        ...action.decks
      };

    // add a new question to a deck
    case 'ADD_QUESTION':
      console.warn('Action details', action);
      console.log(state[action.deckId]);
      console.warn("State detail", state);
      return {
        ...state,
        [action.deckId]: {
          ...state[action.deckId],
          questions: [
            ...state[action.deckId].questions,
            { question: action.question, answer: action.answer }
          ]
        }
      };
      // return {
      //   ...state,
      //   [action.id]: state[action.id].push(action.card)
      // };

    //return default state if none of the actions above are true
    default:
      return state;
  }
};

export default decksReducer;