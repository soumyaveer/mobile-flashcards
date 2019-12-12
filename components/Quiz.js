import React, { Component } from 'react';
import { StyleSheet, View } from "react-native";
import { Button, Text } from 'react-native-elements';
import Question from "./Question";

class Quiz extends Component {

  render() {
    // console.log("Props in Quiz view", this.props.state.params)
    const {deck} = this.props.navigation.state.params;
    console.log("Props for Quiz view============================>", deck)
    return (
      <View style={styles.container}>
        {
          deck.questions.map((card, index) =>
          <Question card={card} key={index} />
          )
        }
      </View>
    )
  }
}

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  buttonContainer: {
    margin: 20,
    width: 100,
    color: 'red'
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
  },
});