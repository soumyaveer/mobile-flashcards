import React, { Component } from 'react';
import { StyleSheet, View, TextInput, KeyboardAvoidingView } from "react-native";
import { Text, Button } from 'react-native-elements';
import { connect } from "react-redux";
import { handleAddQuestionToDeck } from "../actions";
import { getDeck } from "../utils/api";

class NewQuestion extends Component {
  state = {
    question: '',
    answer: ''
  };

  handleOnSubmit = () => {
    const { navigation, dispatch } = this.props;
    const deckId = navigation.getParam('deckId');
    const card = this.state;
    dispatch(handleAddQuestionToDeck(deckId, card)).then(() => {
      getDeck(deckId).then((deck) => {
        navigation.navigate(
          'DeckListItem',
          {
            deck: deck
          })
      })
    })
  };

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text h2>
          Add a new question
        </Text>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter Question here..."
            onChangeText={(question) => this.setState({ question })}
            value={this.state.question}
          />
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter Answer here..."
            onChangeText={(answer) => this.setState({ answer })}
            value={this.state.answer}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            style={{ borderRadius: 20 }}
            title='Submit'
            raised={true}
            onPress={this.handleOnSubmit}
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = (store, { navigation }) => {
  const deckId = store[navigation.getParam('deckId')];

  return {
    deckId
  };
};

export default connect(mapStateToProps)(NewQuestion);

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
    width: 100
  },
  item: {
    padding: 10,
    fontSize: 24,
    height: 30,
    backgroundColor: '#fff'
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
  },
  buttons: {
    color: 'black',
    borderWidth: 0.5,
    borderRadius: 20
  }
});