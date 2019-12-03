import React from 'react';
import DeckLists from './components/DeckLists';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  this.state = {
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
      <DeckLists decks={this.state.decks}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e4ee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
