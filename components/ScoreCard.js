import React, { Component } from 'react';
import { StyleSheet, View } from "react-native";
import { Text } from 'react-native-elements';

class ScoreCard extends Component {
  state = {
    correctAnswers: 4,
    totalQuestions: 5
  }

  render() {
    const { correctAnswers, totalQuestions } = this.state
    return (
      <View style={styles.container}>
        <Text h2>
          Quiz Score
        </Text>

        <Text h4>
          Total number of Questions: {totalQuestions}
        </Text>

        <Text h4>
          Number of Correct Questions: {correctAnswers}
        </Text>

        <Text h4>
          Percentage: {correctAnswers/totalQuestions * 100}
        </Text>
      </View>
    )
  }
}

export default ScoreCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    alignItems: 'center',
    backgroundColor: '#e7e4ee',
    justifyContent: 'center'
  },
  item: {
    padding: 10,
    fontSize: 24,
    height: 30,
    backgroundColor: '#e7e4ee'
  }
})