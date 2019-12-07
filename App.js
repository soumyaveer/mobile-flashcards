import React from 'react';
import DeckLists from './components/DeckLists';
import { StyleSheet, Text, View, Button } from 'react-native';
import DeckListItem from "./components/DeckListItem";
import Quiz from "./components/Quiz";
import NewDeck from "./components/NewDeck";
import NewQuestion from "./components/NewQuestion";
import ScoreCard from "./components/ScoreCard";
import { TabNavigator, StackNavigator } from 'react-navigation'
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import DeckListItemCard from "./components/DeckListItemCard";

function FlashCardsStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: 20 }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  Decks: {
    screen: DeckLists,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards' size={30} color={tintColor}/>
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
    activeTintColor: '#000',
    // activeTintColor: '#007bff',
    style: {
      height: 56,
      // backgroundColor: 'gray',
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

const MainNavigator = StackNavigator({
  Decks: {
    screen: Tabs,
    navigationOptions: {
      headerTintColor: '#000',
      headerStyle: {
        backgroundColor: '#edf9f2',
      }
    }
  },
  DeckListItemCard: {
    screen: DeckListItemCard,
    navigationOptions: {
      headerTintColor: '#000',
      headerStyle: {
        backgroundColor: '#edf9f2',
      }
    }
  },
  DeckListItem: {
    screen: DeckListItem,
    path: '/decks/:id',
    navigationOptions: {
      headerTintColor: '#000',
      headerStyle: {
        backgroundColor: '#edf9f2',
      }
    }
  },
  NewQuestion: {
    screen: NewQuestion,
    path: '/decks/new',
    navigationOptions: {
      headerTintColor: '#000',
      headerStyle: {
        backgroundColor: '#edf9f2',
      }
    }
  }
});
export default function App() {
  return (
    <View style={{flex: 1}}>
      <FlashCardsStatusBar backgroundColor='#0e1215' barStyle={'light-content'}/>
      <MainNavigator />
    </View>

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
    backgroundColor: '#edf9f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
