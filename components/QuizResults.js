import React, {Component} from 'react';
import { StyleSheet, View } from "react-native";
import { Button, Text } from 'react-native-elements';
import { NavigationActions } from "react-navigation";
import {connect} from 'react-redux';

class QuizResults extends Component {
  handleQuizRestart = () => {
    const {deck} = this.props.navigation.state.params;

    this.props.navigation.navigate(
      'Quiz',
      {
        deck,
        resetState: true
      }
    )
  };

  handleBackToDeck = () => {
    const {deck} = this.props.navigation.state.params

    this.props.navigation.navigate(
      'DeckListItem',
      {
        id: deck.id,
        deck
      }
    )
  };

  render(){
    const {numberOfQuestions, numberOfCorrectAnswers, score} = this.props.navigation.state.params;
    console.log("Checking props for Results", this.props.navigation.state.params)
    return(
      <View style={styles.container}>
        <Text h2>Quiz Results</Text>

        <Text h4>
          Total Number of Questions: {numberOfQuestions}
        </Text>

        <Text h4>
          Number of correct answers: {numberOfCorrectAnswers}
        </Text>

        <Text h4>
          Your Score: {score}/{numberOfQuestions}
        </Text>

        <Text h4>
          Percentage: {(score * 100)/ numberOfQuestions}%
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            title='Restart Quiz'
            raised={true}
            onPress={this.handleQuizRestart}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title='Back to Deck'
            raised={true}
            onPress={this.handleBackToDeck}
          />
        </View>
      </View>
    )
  }
}
//
// function mapStateToProps(store) {
//   return { questions: store[this.props.navigation.state.params.deck].questions };
// }
//
export default connect()(QuizResults);

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
  forwardArrowButton: {
    alignSelf: 'flex-end'
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