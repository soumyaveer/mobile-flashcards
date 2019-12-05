import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import DeckListItemCard from "./DeckListItemCard";
import { Card, ListItem, Button, Icon } from 'react-native-elements'

class DeckLists extends Component {
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

  buildData = () => {
    const { decks } = this.state;
    return decks.map(deck => {
      return {
        key: deck.name,
        name: deck.name,
        numberOfCards: deck.numberOfCards
      }
    })
  };

  render() {
    console.log(this.state.decks)
    const data = this.buildData();

    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <DeckListItemCard
              style={styles.item}
              name={item.name}
              numberOfCards={item.numberOfCards}
            />
          )}
        />
      </View>
    )
  }
}

export default DeckLists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d1edf9',
  },
  item: {
    padding: 10,
    fontSize: 24,
    height: 50,
    backgroundColor: '#d1edf9'
  }
})
