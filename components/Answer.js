import React, { Component } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { Text } from 'react-native-elements';

class Answer extends Component {

  toggleView = () => {
    this.props.onViewToggle()
  };

  render() {
    const { card } = this.props;
    return (
        <View style={styles.container}>
          <Text style={styles.item}>
            {card.answer}
          </Text>

          <TouchableWithoutFeedback onPress={this.toggleView}>
            <Text style={styles.toggleItem}>
              See Question
            </Text>
          </TouchableWithoutFeedback>
        </View>
    )
  }
}

export default Answer;

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
    margin: 30,
    fontSize: 24,
    height: 30,
    backgroundColor: '#fff',
  },
  toggleItem: {
    color: '#1d21ff',
    padding: 10,
    margin: 30,
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