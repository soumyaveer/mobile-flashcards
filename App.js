import React from 'react';
import DeckLists from './components/DeckLists';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  state = {
    decks: [
      {
        name: "Deck 1",
        numberOfCards: 3
      },
      {
        name: "Deck 2",
        numberOfCards: 2
      },
      {
        name: "Deck 3",
        numberOfCards: 4
      }
    ]
  };

  return (
    <View style={styles.container}>
      <DeckLists decks={state.decks}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
