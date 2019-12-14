import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { setLocalNotification } from './utils/notifications'
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
  componentDidMount() {
    setLocalNotification();
  }

  render() {
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