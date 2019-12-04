import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from "react-native";
import { Text, Button} from 'react-native-elements';

class NewQuestion extends Component {
  state = {
    question: '',
    answer: ''
  }
  render(){
    return(
      <View style={styles.container}>
        <Text h2>
          Add a new question
        </Text>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter Question here..."
            onChangeText={(question ) => this.setState({question})}
            value={this.state.text}
          />
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter Answer here..."
            onChangeText={(answer) => this.setState({answer})}
            value={this.state.text}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button style={{borderRadius: 20}} title='Submit' raised={true}/>
          {/*<Button*/}
          {/*  color='#fff'*/}
          {/*  title="Submit"*/}
          {/*  onPress={() => Alert.alert('Cannot press this one')}*/}
          {/*/>*/}
        </View>
      </View>
    )
  }
}

export default NewQuestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    alignItems: 'center',
    backgroundColor: '#e7e4ee',
    justifyContent: 'center'
  },
  buttonContainer: {
    margin: 20,
    width: 100,
    // backgroundColor: '#8b008b',
    // borderWidth: 0.5,
    // borderRadius: 20
  },
  item: {
    padding: 10,
    fontSize: 24,
    height: 30,
    backgroundColor: '#e7e4ee'
  },
  input: {
    height: 40,
    fontSize: 22,
    padding: 25,
    margin: 30,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 20
  },

  buttons: {
    color: 'black',
    borderWidth: 0.5,
    borderRadius: 20
  }
})