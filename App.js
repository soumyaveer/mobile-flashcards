import React from 'react';
import DeckLists from './components/DeckLists';
import { StyleSheet, Text, View, Button } from 'react-native';
import DeckListItem from "./components/DeckListItem";
import Quiz from "./components/Quiz";
import NewDeck from "./components/NewDeck";
import NewQuestion from "./components/NewQuestion";
import ScoreCard from "./components/ScoreCard";
import { TabNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons';



export default function App() {
  const Tabs = TabNavigator({
    Decks: {
      screen: DeckLists,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor}/>
      }
    },
    AddDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'Add Deck',
        tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor}/>
      }
    }
  }, {
    tabBarOptions: {
      activeTintColor: '#007bff',
      style: {
        height: 56,
        backgroundColor: '#edf9f2',
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowRadius: 6,
        shadowOpacity: 2
      }
    }
  });

  return (
    <Tabs />
    // <View style={styles.container}>
    //   {/*<DeckLists decks={this.state.decks}/>*/}
    //   <View>
    //     <Text>Print</Text>
    //
    //     <Tabs />
    //   </View>
    //
    //   {/*<DeckListItem />*/}
    //   {/*<Quiz />*/}
    //   {/*<NewDeck />*/}
    //   {/*<NewQuestion />*/}
    //   {/*<ScoreCard />*/}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1edf9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
