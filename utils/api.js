import { AsyncStorage } from "react-native";
import { data } from './helpers'

export const STORAGE_KEY = 'mobile-flashcards';

export const getDecks = () => {
  // AsyncStorage.clear();
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(resp => {
      if (resp === undefined) {
        return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      } else {
        return JSON.parse(resp)
      }
    })
};

export const getDeck = (id) => {
  return getDecks().then(decks => decks[id])
};

function generateUID () {
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

  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(newDeck)).then(() => newDeckAttributes);
};

export const addQuestionToDeck = (deckId, card) => {
  return AsyncStorage.getItem(STORAGE_KEY).then(results => {
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
  // return getDecks()
  //   .then(decks => {
  //     decks[id].questions.push(card);
  //     return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(decks))
  //   })
};