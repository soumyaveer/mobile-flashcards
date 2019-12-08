import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import ScoreCard from "./components/ScoreCard";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import reducer from './reducers';
import middleware from './middleware';
import MainNavigator from "./components/MainNavigator";

const store = createStore(reducer, middleware);

function FlashCardsStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: 20 }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <FlashCardsStatusBar backgroundColor='#0e1215' barStyle={'light-content'}/>
        <MainNavigator/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf9f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
