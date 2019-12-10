import { AsyncStorage } from "react-native";
import { data } from './helpers'

export const STORAGE_KEY = 'mobile-flashcards';

export const getDecks = () => {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(resp => {
      console.log(resp)
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

export const saveDeckTitle = (title) => {
  const newDeck = {
    title: `${title}`,
    questions: []
  };

  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [title]: newDeck
  }))
}

export const addQuestionToDeck = (id, card) => {
  return AsyncStorage.getItem(STORAGE_KEY).then(results => {
    const data = JSON.parse(results);

    // Add card to existing deck data.
    data[id] = {
      ...data[id],
      questions: [
        ...data[id].questions,
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