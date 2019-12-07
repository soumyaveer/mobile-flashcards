import React, { Component } from 'react';
import { StyleSheet, View } from "react-native";
import { Button, Text } from 'react-native-elements';

class Quiz extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text h3>
          Does React Native work with android?
        </Text>

        <Text style={styles.item}>
          See Answer
        </Text>

        <View style={styles.buttonContainer}>
          <Button title='True' raised={true}/>
        </View>

        <View style={styles.buttonContainer}>
          <Button title='False' raised={true}/>
        </View>
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