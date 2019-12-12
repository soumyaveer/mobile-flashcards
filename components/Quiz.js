import React, { Component } from 'react';
import { StyleSheet, View } from "react-native";
import { Button, Text } from 'react-native-elements';
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

  renderQuestion = (question, index) => {
    if (this.state.currentQuestion === question) {
      return <Question card={question} key={index}/>
    }
  }

  handleScoring = (isCorrectAnswer) => {
    console.log("I am receiving values", isCorrectAnswer)
    const {score, numberOfCorrectAnswers} = this.state;
    if(isCorrectAnswer === true){
      this.setState({
        ...this.state,
        score: score + 1,
        numberOfCorrectAnswers: numberOfCorrectAnswers + 1
      }, () =>  console.log(this.state))
    }
  };

  handleQuestionNavigation = (questionIndex) =>{
    console.log("I am going to move to", questionIndex);
    const { questions } = this.props.navigation.state.params.deck;
    const {currentQuestionIndex} = this.state;
    const currentQuestion = questions[questionIndex];
    console.log("Checking why current question is undefined", currentQuestion);
    this.setState({
      ...this.state,
      currentQuestionIndex: questionIndex,
      currentQuestion
    }, () => console.log("Next question is", this.state))
  };

  handleViewToggle = () => {
    const {showAnswer} = this.state;
    console.log("Toggling View")
    this.setState({
      ...this.state,
      showAnswer: !showAnswer
    }, () => console.log("State after Question-Answer view toggle", this.state))
  }

  render() {
    // console.log("Props in Quiz view", this.props.state.params)
    const { deck } = this.props.navigation.state.params;
    console.log("Props for Quiz view============================>", deck)
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
                    currentQuestionIndex={index}
                    firstQuestionIndex={this.state.firstQuestionIndex}
                    lastQuestionIndex={this.state.lastQuestionIndex}
                    key={index}
                    onQuestionAnswered={this.handleScoring}
                    onQuestionNavigate={this.handleQuestionNavigation}
                    onViewToggle={this.handleViewToggle}
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
  progress: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 8,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#fff'
  },
});