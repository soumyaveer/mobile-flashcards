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
              id={item.id}
              deck={item}
              numberOfCards={item.questions.length || 0}
              navigation={this.props.navigation}
            />
          )}
        />
      </View>
    )
  }
}

const mapStateToProps = (store) => {
  // TODO: Figure out why decks are keyed by reducer
  const deckObjectsById = store.decksReducer;
  const decks = [];

  for(const deckId in deckObjectsById) {
    decks.push(deckObjectsById[deckId]);
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
});
