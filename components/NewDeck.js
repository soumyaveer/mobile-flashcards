import React, { Component } from 'react';
import { View, StyleSheet, TextInput, KeyboardAvoidingView } from "react-native";
import { Button, Text } from 'react-native-elements';
import { addDeck } from "../actions";
import { connect } from "react-redux";
import { handleAddDeck } from "../actions";

class NewDeck extends Component {
  state = {
    title: '',
    questions:[]
  };

  handleTextChange = (title) => {
    this.setState(() => ({
      title
    }));
  };

  handleOnSubmit = () => {
    const { dispatch, navigation } = this.props;
    const { title } = this.state;

    dispatch(handleAddDeck(title)).then((response) => {
      const deck = response.deck;
      navigation.navigate("DeckListItem", { deck: deck });
    });
  };

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text h3>What is the title of your new deck?</Text>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter Deck Title here..."
            value={this.state.title}
            onChangeText={this.handleTextChange}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button title='Create Deck' raised={true} onPress={this.handleOnSubmit}/>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(NewDeck);

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
    backgroundColor: '#fff',
    width: 350,
    fontSize: 20,
    height: 50,
    padding: 10,
    borderRadius: 1,
    borderColor: 'gray',
    margin: 20
  }
})