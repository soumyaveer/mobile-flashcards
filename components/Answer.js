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
          <Text h2>
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
  toggleItem: {
    color: '#1d21ff',
    padding: 10,
    margin: 30,
    fontSize: 24,
    height: 30,
    backgroundColor: '#fff'
  }
});