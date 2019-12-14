import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Card } from "react-native-elements";

class DeckListItemCard extends Component {
  navigateToDeck = () => {
   this.props.navigation.navigate(
      'DeckListItem',
      {
        id: this.props.id,
        deck: this.props.deck
      }
    )
  };

  render() {
    const deck = this.props.deck;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.navigateToDeck}>
          <Card style={styles.card} title={deck.title}>
            <Text style={styles.item}>{deck.questions.length}</Text>
          </Card>
        </TouchableOpacity>
      </View>
    )
  }
}

export default DeckListItemCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    alignItems: 'center',
    backgroundColor: '#fff',

  },
  item: {
    padding: 5,
    fontSize: 20,
    height: 50,
    width: 70,
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center'
  },

  card: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    height: 50,
    backgroundColor: '#fff',
  }
})