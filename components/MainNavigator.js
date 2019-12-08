import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator} from "react-navigation-tabs";
import { createStackNavigator} from "react-navigation-stack";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import DeckLists from "./DeckLists";
import NewDeck from "./NewDeck";
import DeckListItemCard from "./DeckListItemCard";
import DeckListItem from "./DeckListItem";
import NewQuestion from "./NewQuestion";
import Quiz from "./Quiz";

const Tabs = createBottomTabNavigator({
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

const MainStackNavigator = createStackNavigator({
  Home: {
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

const MainNavigator = createAppContainer(MainStackNavigator);
export default MainNavigator;