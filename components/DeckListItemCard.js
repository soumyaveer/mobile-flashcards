import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Card } from "react-native-elements";

class DeckListItemCard extends Component {

  render() {
    return (
      <View style={ styles.container }>
        <Card title={`${this.props.name}`}>
          <Text style={styles.name}>{this.props.numberOfCards}</Text>
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
  },
  item: {
    padding: 10,
    fontSize: 24,
    height: 50
  },
})