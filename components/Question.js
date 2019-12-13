import React, { Component } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Button, Text } from 'react-native-elements';
import { Ionicons } from "@expo/vector-icons";
import QuizResults from "./QuizResults";

class Question extends Component {
  handleButtonPress = (event, selectedAnswer) => {
    console.log("What is the event", selectedAnswer);
    selectedAnswer === 'correct' ? this.props.onQuestionAnswered(true) : this.props.onQuestionAnswered(false)
  };

  handleArrowPress = (event, direction) => {
    console.log("Moving", direction);
    const {currentQuestionIndex} = this.props;
    if(direction === 'forward'){
      this.props.onQuestionNavigate(currentQuestionIndex + 1);
    } else if(direction === 'back'){
      this.props.onQuestionNavigate(currentQuestionIndex - 1);
    }
  };

  toggleView = () => {
    this.props.onViewToggle()
  }

  handleResultsView = () => {
    this.props.navigation.navigate(
      'QuizResults',
      {
        numberOfQuestions: this.props.lastQuestionIndex,
        numberOfCorrectAnswers: this.props.numberOfCorrectAnswers,
        score: this.props.score
      }
    )
  };

  render() {
    const { card } = this.props;
    console.log("Props received by Card", card);

    return (
      <View>
        <Text h3>
          {card.question}
        </Text>

        <TouchableWithoutFeedback onPress={this.toggleView}>
          <Text style={styles.item}>
            See Answer
          </Text>
        </TouchableWithoutFeedback>

        <View style={styles.buttonContainer}>
          <Button
            title='Correct'
            raised={true}
            onPress={(event) => this.handleButtonPress(event, 'correct')}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title='InCorrect'
            raised={true}
            onPress={(event) => this.handleButtonPress(event, 'incorrect')}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {
            this.props.firstQuestionIndex !== this.props.currentQuestionIndex &&
            <Button
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
              style={{alignSelf: 'flex-end'}}
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
          {
            this.props.lastQuestionIndex === this.props.currentQuestionIndex + 1 &&
            <View style={styles.buttonContainer}>
              <Button title='Submit to see Results' color="#841584" onPress={this.handleResultsView}/>
            </View>
          }
        </View>
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