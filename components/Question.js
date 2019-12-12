import React, { Component } from 'react';
import { StyleSheet, View } from "react-native";
import { Button, Text } from 'react-native-elements';
import { Ionicons } from "@expo/vector-icons";

class Question extends Component {
  handleButtonPress = (event, selectedAnswer) => {
    console.log("What is the event", selectedAnswer);
    const { answer } = this.props.card;
    console.log("Checking the answer", answer, selectedAnswer)
    answer === selectedAnswer ? this.props.onQuestionAnswered(true) : this.props.onQuestionAnswered(false)
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

  render() {
    const { card } = this.props;
    console.log("Props received by Card", card);

    return (
      <View>
        <Text h3>
          {card.question}
        </Text>

        <Text style={styles.item}>
          See Answer
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            title='True'
            raised={true}
            onPress={(event) => this.handleButtonPress(event, 'Answer')}
          />

        </View>

        <View style={styles.buttonContainer}>
          <Button
            title='False'
            raised={true}
            onPress={(event) => this.handleButtonPress(event, 'False')}
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