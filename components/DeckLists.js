import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacityComponent } from 'react-native';
import DeckListItemCard from "./DeckListItemCard";
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import {getDecks} from "../utils/helpers";

class DeckLists extends Component {
  state = {
    decks: {}
  };

  componentDidMount() {
    const decks = getDecks();
    this.setState((state) => {
      return {
        ...state,
        decks
      }
    })
  }

  buildData = () => {
    const { decks } = this.state;
    console.log("What is the state here?", decks)
    return decks.map(deck => {
      return {
        key: deck['title'],
        title: deck['title'],
        numberOfCards: deck['questions']
      }
    })
  };

  render() {
    console.log(this.state.decks)
    // const data = this.buildData()
    // console.log("what did I convert it into?", data)
    console.log("What is the state here?", this.state.decks)

    return (
      <View style={styles.container}>
        <FlatList
          data={[this.state.decks]}
          renderItem={({ item }) => (
            <DeckListItemCard
              style={styles.item}
              id={item['title']}
              key={item.title}
              title={item['title']}
              numberOfCards={item['questions']}
              navigation={this.props.navigation}
            />
          )}
        />
      </View>
    )
  }
}

export default DeckLists;

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
