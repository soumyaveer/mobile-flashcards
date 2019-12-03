import React, { Component } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { Button } from 'react-native-elements';

class DeckListItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Deck Title
        </Text>

        <Text style={styles.item}>
          3 cards
        </Text>

        <View style={styles.buttonContainer}>
          <Button title='Add Card' type="outline"
                  color="#841584"/>
        </View>

        <View style={styles.buttonContainer}>

          <Button title='Start Quiz' color="#841584"/>
        </View>
      </View>
    )
  }
}

export default DeckListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e7e4ee'
  },
  buttonContainer: {
    margin: 20
  },
  item: {
    padding: 10,
    fontSize: 24,
    height: 30,
    backgroundColor: '#e7e4ee',
  },
  header: {
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    height: 50,
    backgroundColor: '#e7e4ee',
  }
});