import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import DeckListItemCard from "./DeckListItemCard";
import { connect } from 'react-redux';
import { handleLoadingDecks } from "../actions";

class DeckLists extends Component {
  state = {
    decks: []
  };

  componentDidMount() {
    this.props.dispatch(handleLoadingDecks());
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item, index) => `${item.title}${index}`}
          data={this.props.decks}
          renderItem={({ item }) => (
            <DeckListItemCard
              style={styles.item}
              id={item.title}
              deck={item}
              numberOfCards={item.questions.length}
              navigation={this.props.navigation}
            />
          )}
        />
      </View>
    )
  }
}

const mapStateToProps = (foo) => {
  // TODO: Figure this out
  const deckObjectsByTitle = foo.decksReducer;
  const decks = [];

  for(const deckTitle in deckObjectsByTitle) {
    decks.push(deckObjectsByTitle[deckTitle]);
  }

  return {
    decks
  };
};

export default connect(mapStateToProps)(DeckLists);

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
