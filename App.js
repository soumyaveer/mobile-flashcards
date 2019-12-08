import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import ScoreCard from "./components/ScoreCard";
import {createAppContainer} from "react-navigation";
import { Provider, connect } from 'react-redux';
import { createStore } from "redux";
import reducer  from './reducers';
import middleware from './middleware';
import MainNavigator from "./components/MainNavigator";

function FlashCardsStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: 20 }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}
const store = createStore(reducer, middleware);

export default class App extends Component {
  render() {
    console.log("This is the store", store);
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <FlashCardsStatusBar backgroundColor='#0e1215' barStyle={'light-content'}/>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  item: {
    padding: 10,
    fontSize: 24,
    height: 50,
    backgroundColor: '#fff'
  }
})