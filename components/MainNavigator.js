import { TabNavigator, StackNavigator } from "react-navigation";
import DeckLists from "./DeckLists";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import NewDeck from "./NewDeck";
import DeckListItemCard from "./DeckListItemCard";
import DeckListItem from "./DeckListItem";
import NewQuestion from "./NewQuestion";
import Quiz from "./Quiz";
import React from "react";

const Tabs = TabNavigator({
  Decks: {
    screen: () => <DeckLists />,
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
    path: '/decks/:id/questions/new',
    navigationOptions: {
      headerTintColor: '#000',
      headerStyle: {
        backgroundColor: '#edf9f2',
      }
    }
  },
  Quiz: {
    screen: Quiz,
    path: '/decks/:id/quiz',
    navigationOptions: {
      headerTintColor: '#000',
      headerStyle: {
        backgroundColor: '#edf9f2',
      }
    }
  }
});

export default MainNavigator;