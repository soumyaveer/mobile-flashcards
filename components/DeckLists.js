import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import DeckListItemCard from "./DeckListItemCard";
import { connect } from 'react-redux';
import { handleLoadingDecks } from "../actions";
import { bindActionCreators } from "redux";

class DeckLists extends Component {
  state = {
    decks: {}
  }

  componentDidMount() {
    console.log("These are the props:", this.props)
    const value = this.props.handleLoadingDecks()
    console.log("Checking this value:", value)
  }

  getData = () => {
    const { decks } = this.props;
    return Object.values(decks)
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.getData}
          renderItem={({ item }) => (
            <DeckListItemCard
              style={styles.item}
              id={item['title']}
              key={item.title}
              title={item['title']}
              deck={item}
              numberOfCards={item['questions']}
              navigation={this.props.navigation}
            />
          )}
        />
      </View>
    )
  }
}

const mapStateToProps = ({decks}) => {
  return {
    decks
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({handleLoadingDecks}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(DeckLists);

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
