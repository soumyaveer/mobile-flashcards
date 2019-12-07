import React, { Component } from 'react';
import { StyleSheet, View, Text, Navigator } from "react-native";
import { Button } from 'react-native-elements';

class DeckListItem extends Component {
  navigateToNewQuestion = () => {
    console.log("Trying to navigate to new questions screen")
    console.log("Checking my props:", this.props)
    console.log("Checking the navigation props", this.props.navigation)

    this.props.navigation.navigate(
      'NewQuestion'
    )
  }
  render() {
    console.log('Inside DeckListItem')
    return (
      <View style={styles.container}>
        <Text>Entry Detail - {JSON.stringify(this.props.navigation.state.params.itemId)}</Text>
        <Text style={styles.header}>
          Deck Title
        </Text>

        <Text style={styles.item}>
          3 cards
        </Text>

        <View style={styles.buttonContainer}>
          <Button title='Add Card' type="outline" color="#841584" onPress={this.navigateToNewQuestion}/>
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
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  buttonContainer: {
    marginLeft: 100,
    marginRight: 100,
    marginTop: 30
  },
  item: {
    padding: 10,
    fontSize: 24,
    height: 30,
    backgroundColor: '#fff',
  },
  header: {
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    height: 50,
    backgroundColor: '#fff',
  }
});