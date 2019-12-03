import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

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
            <Text style={styles.name}>{item.name} - {item.numberOfCards}</Text>
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
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
