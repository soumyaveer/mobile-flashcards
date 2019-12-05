import React, { Component } from 'react';
import { View, StyleSheet,  TextInput } from "react-native";
import { Button, Text, Input } from 'react-native-elements';

class NewDeck extends Component {
  state={
    text: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Text h3>What is the title of your new deck?</Text>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter Deck Title here..."
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button title='Submit' raised={true} />
        </View>
      </View>
    )
  }
}

export default NewDeck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
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
  input: {
    height: 40,
    fontSize: 22,
    padding: 25,
    margin: 30,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 20
  }
})