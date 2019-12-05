import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Card } from "react-native-elements";

class DeckListItemCard extends Component {

  render() {
    return (
      <View style={ styles.container }>
        <Card style={styles.card} title={`${this.props.name}`}>
          <Text style={styles.item}>{this.props.numberOfCards}</Text>
        </Card>
      </View>
    )
  }
}

export default DeckListItemCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    alignItems: 'center',
    backgroundColor: '#d1edf9',

  },
  item: {
    padding: 10,
    fontSize: 20,
    height: 50,
    width: 70,
    backgroundColor: '#d1edf9',
    textAlign: 'center',
    justifyContent: 'center'
  },

  card: {
    padding: 10,
    fontSize: 24,
    fontWeight: 'bold',
    height: 50,
    backgroundColor: '#d1edf9',
  }
})