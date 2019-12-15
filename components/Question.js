import React, { Component } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Button, Text } from 'react-native-elements';
import { Ionicons } from "@expo/vector-icons";
import QuizResults from "./QuizResults";
import { clearLocalNotification, setLocalNotification } from "../utils/notifications";

class Question extends Component {
  handleButtonPress = (event, selectedAnswer) => {
    const { onQuestionAnswered } = this.props;
    selectedAnswer === 'correct' ? onQuestionAnswered(true) : onQuestionAnswered(false)
    clearLocalNotification()
      .then(setLocalNotification())
  };

  handleArrowPress = (event, direction) => {
    const { currentQuestionIndex, onQuestionNavigate } = this.props;
    if (direction === 'forward') {
      onQuestionNavigate(currentQuestionIndex + 1);
    } else if (direction === 'back') {
      onQuestionNavigate(currentQuestionIndex - 1);
    }
  };

  toggleView = () => {
    this.props.onViewToggle()
  };

  handleResultsView = () => {
    const { lastQuestionIndex, numberOfCorrectAnswers, score, deck } = this.props;
    this.props.navigation.navigate(
      'QuizResults',
      {
        numberOfQuestions: lastQuestionIndex,
        numberOfCorrectAnswers: numberOfCorrectAnswers,
        score: score,
        deck: deck
      }
    )
  };

  render() {
    const card = this.props.card || this.props.navigation.state.params.card;

    return (
      <View style={styles.container}>
        <Text h3>
          {card.question}
        </Text>

        <TouchableWithoutFeedback onPress={this.toggleView}>
          <Text style={styles.viewAnswerLink}>
            See Answer
          </Text>
        </TouchableWithoutFeedback>

        <View style={styles.buttonContainer}>
          <Button
            title='Correct'
            raised={true}
            buttonStyle={styles.correctButtonStyle}
            onPress={(event) => this.handleButtonPress(event, 'correct')}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title='In Correct'
            raised={true}
            buttonStyle={styles.inCorrectButtonStyle}
            onPress={(event) => this.handleButtonPress(event, 'incorrect')}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {
            this.props.firstQuestionIndex !== this.props.currentQuestionIndex &&
            <Button
              style={styles.arrowButton}
              icon={
                <Ionicons
                  name="ios-arrow-back"
                  size={15}
                />
              }
              onPress={(event) => this.handleArrowPress(event, 'back')}
              type='outline'
            />
          }

          {
            this.props.lastQuestionIndex !== this.props.currentQuestionIndex + 1 &&
            <Button
              style={styles.arrowButton}
              icon={
                <Ionicons
                  name="ios-arrow-forward"
                  size={15}
                />
              }
              onPress={(event) => this.handleArrowPress(event, 'forward')}
              iconRight
              type='outline'
            />
          }
        </View>

        {
            this.props.lastQuestionIndex === this.props.currentQuestionIndex + 1 &&
            <View style={styles.submitButton}>
              <Button title='Submit to see Results' raised={true} onPress={this.handleResultsView}/>
            </View>
          }
      </View>
    )
  }
}

export default Question;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 30,
    justifyContent: 'center'
  },
  buttonContainer: {
    margin: 15,
    width: 100
  },
  correctButtonStyle:{
    backgroundColor: '#0a5e0d'
  },
  inCorrectButtonStyle:{
    backgroundColor: '#ff2d38'
  },
  submitButton:{
    marginBottom: 15,
    width: 100
  },
  arrowButton: {
    alignSelf: 'flex-end',
    width: 100,
    padding: 10,
    margin: 30
  },
  viewAnswerLink: {
    padding: 10,
    margin: 20,
    fontSize: 24,
    height: 30,
    color: '#1d21ff',
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