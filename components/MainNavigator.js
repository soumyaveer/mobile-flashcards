import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import DeckLists from "./DeckLists";
import NewDeck from "./NewDeck";
import DeckListItemCard from "./DeckListItemCard";
import DeckListItem from "./DeckListItem";
import NewQuestion from "./NewQuestion";
import Quiz from "./Quiz";
import QuizResults from "./QuizResults";
import Question from "./Question";

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
   navigationOptions: {
     height: 56,
     headerTintColor: '#000',
     headerStyle: {
       backgroundColor: '#edf9f2',
     }
   },
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

const MainStackNavigator = createStackNavigator(
  {
    Home: Tabs,
    DeckListItem: DeckListItem,
    DeckListItemCard: DeckListItemCard,
    NewQuestion: NewQuestion,
    Quiz: Quiz,
    Question: Question,
    QuizResults: QuizResults,
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerTintColor: '#000',
      headerStyle: {
        backgroundColor: '#edf9f2',
      }
    }
  }
);

const MainNavigator = createAppContainer(MainStackNavigator);
export default MainNavigator;