export const decksReducer = (state = {}, action) => {
  switch (action.type) {

    // load all the decks in the list
    case 'LOAD_DECKS':
      return action.decks;

    // add a new deck to the decklist
    case 'ADD_DECK':
      return {
        ...state,
        ...action.decks
      };

    // add a new question to a deck
    case 'ADD_QUESTION':
      return {
        ...state,
        [action.deck]: state[action.deck].concat(action.card)
      };

    //return default state if none of the actions above are true
    default:
      return state;
  }
};