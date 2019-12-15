import React, { Component } from 'react';
import { StyleSheet, View } from "react-native";
import { Text } from 'react-native-elements';
import Question from "./Question";
import Answer from "./Answer";

class Quiz extends Component {
  state = {
    currentQuestion: this.props.navigation.state.params.deck.questions[0],
    currentQuestionIndex: 0,
    firstQuestionIndex: 0,
    lastQuestionIndex: this.props.navigation.state.params.deck.questions.length,
    score: 0,
    numberOfCorrectAnswers: 0,
    showAnswer: false
  };

  handleScoring = (isCorrectAnswer) => {
    const { score, numberOfCorrectAnswers } = this.state;
    if (isCorrectAnswer === true) {
      this.setState({
        score: score + 1,
        numberOfCorrectAnswers: numberOfCorrectAnswers + 1
      });
    }
  };

  handleQuestionNavigation = (questionIndex) => {
    const { questions } = this.props.navigation.state.params.deck;
    const currentQuestion = questions[questionIndex];
    this.setState({
      currentQuestionIndex: questionIndex,
      currentQuestion
    });
  };

  handleViewToggle = () => {
    const { showAnswer } = this.state;
    this.setState({
      showAnswer: !showAnswer
    });
  };

  render() {
    const { deck } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <Text style={styles.progress}>
          You are on Question {this.state.currentQuestionIndex + 1}/{this.state.lastQuestionIndex}
        </Text>
        {
          deck.questions.map((card, index) => {
              if (this.state.currentQuestion === card) {
                return this.state.showAnswer === false
                  ? (
                    <Question
                      card={card}
                      deck={deck}
                      currentQuestionIndex={index}
                      firstQuestionIndex={this.state.firstQuestionIndex}
                      lastQuestionIndex={this.state.lastQuestionIndex}
                      key={index}
                      score={this.state.score}
                      numberOfCorrectAnswers={this.state.numberOfCorrectAnswers}
                      onQuestionAnswered={this.handleScoring}
                      onQuestionNavigate={this.handleQuestionNavigation}
                      onViewToggle={this.handleViewToggle}
                      navigation={this.props.navigation}
                    />
                  )
                  : (
                    <Answer
                      card={card}
                      key={index}
                      onViewToggle={this.handleViewToggle}
                    />
                  )
              }
            }
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
  progress: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 8,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#fff'
  },
});