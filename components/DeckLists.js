import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import DeckListItemCard from "./DeckListItemCard";
import { Card, ListItem, Button, Icon } from 'react-native-elements'

class DeckLists extends Component {

  buildData = () => {
    const { decks } = this.props
    return decks.map(deck => {
      return {
        key: deck.name,
        name: deck.name,
        numberOfCards: deck.numberOfCards
      }
    })
  };

  render() {
    console.log(this.props.decks)
    const data = this.buildData();

    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <DeckListItemCard
              style={styles.name}
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
  },
  item: {
    padding: 10,
    fontSize: 24,
    height: 50
  },
})
