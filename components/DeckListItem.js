import React, { Component } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { Button } from 'react-native-elements';
import { connect } from "react-redux";

class DeckListItem extends Component {
  state = {
    deck: {}
  };

  navigateToNewQuestion = () => {
    console.log("Trying to navigate to new questions screen")
    const { id } = this.props.deck;
    console.log("Id we are passing to NewQuestion component:", id)
    this.props.navigation.navigate(
      'NewQuestion',
      {
        deckId: id
      }
    )
  };

  navigateToQuiz = () => {
    console.log('------------>')
    console.log("Trying to navigate to quiz screen")
    console.log("Checking my props:", this.props)
    console.log("Checking the navigation props", this.props.navigation)

    this.props.navigation.navigate(
      'Quiz'
    )
  };

  render() {
    console.log('Inside DeckListItem', this.props);
    const { deck } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          {deck.title || ''}
        </Text>

        <Text style={styles.item}>
          {deck.questions.length}
        </Text>

        <View style={styles.buttonContainer}>
          <Button title='Add Card' type="outline" color="#841584" onPress={this.navigateToNewQuestion}/>
        </View>

        <View style={styles.buttonContainer}>
          <Button title='Start Quiz' color="#841584" onPress={this.navigateToQuiz}/>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (store, { navigation }) => {
  let deck = navigation.getParam('deck');

  return {
    deck: deck
  }
};

export default connect(mapStateToProps)(DeckListItem);

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