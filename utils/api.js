import { AsyncStorage } from "react-native";
import { data } from './_DATA'

export const STORAGE_KEY = 'mobile-flashcards';

  export const getDecks = () => {
    // AsyncStorage.clear();
    return AsyncStorage.getItem(STORAGE_KEY)
      .then(resp => {
        if (resp === null) {
          return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
        } else {
          return JSON.parse(resp)
        }
      })
  };

  export const getDeck = (deckId) => {
    return AsyncStorage.getItem(STORAGE_KEY).then(response => {
      const decks = JSON.parse(response);

      return decks[deckId]
    })
  };

  function generateUID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }

  export const saveDeckTitle = (title) => {
    const deckId = generateUID();

    const newDeckAttributes = {
      id: deckId,
      title: title,
      questions: []
    };

    const newDeck = {};
    newDeck[deckId] = newDeckAttributes;

    AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(newDeck))
      // .then(() => newDeckAttributes);
    return AsyncStorage.getItem(STORAGE_KEY).then(results => {
      const data = JSON.parse(results);

      return data[deckId]
    })
  };

export const addQuestionToDeck = (deckId, card) => {
   AsyncStorage.getItem(STORAGE_KEY).then(results => {
    const data = JSON.parse(results);

      // Add card to existing deck data.
      data[deckId] = {
        ...data[deckId],
        questions: [
          ...data[deckId].questions,
          { question: card.question, answer: card.answer }
        ]
      };

    // Save updated deck data back to storage
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  });

  return AsyncStorage.getItem(STORAGE_KEY).then(results => {
    const data = JSON.parse(results);

    return data[deckId]
  })
};