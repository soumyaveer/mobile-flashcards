import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Card } from "react-native-elements";

class DeckListItemCard extends Component {

  render() {
    console.log("Getting these in props", this.props);
    return (
      <View style={ styles.container }>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(
          'DeckListItem',
          { itemId: this.props}
        )}>
          <Card style={styles.card} title={`${this.props.name}`}>
            <Text style={styles.item}>{this.props.numberOfCards}</Text>
          </Card>
        </TouchableOpacity>
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
    backgroundColor: '#fff',

  },
  item: {
    padding: 10,
    fontSize: 20,
    height: 50,
    width: 70,
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center'
  },

  card: {
    padding: 10,
    fontSize: 24,
    fontWeight: 'bold',
    height: 50,
    backgroundColor: '#fff',
  }
})