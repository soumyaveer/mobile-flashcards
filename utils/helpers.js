import React from 'react';
import { View } from 'react-native';
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { AsyncStorage } from "react-native";
import { white } from "./colors";

let data = {
  Ruby: {
    title: 'Ruby',
    questions: [
      {
        question: 'Does Ruby support name space?',
        answer: 'True'
      },
      {
        question: 'Can you interpolate strings in ruby?',
        answer: 'True'
      },
      {
        question: 'Ruby is not an Object Oriented Language?',
        answer: 'False'
      }
    ]
  },
  Javascript: {
    title: 'Javascript',
    questions: [
      {
        question: 'Javascript is an Object Oriented Language?',
        answer: 'False'
      },
      {
        question: '{} is object in javascript',
        answer: 'True'
      },
      {
        question: "What is the value of 4 + 3 + 2 + '1'?",
        answer: '91'
      }
    ]
  },
  React: {
    title: 'React',
    questions: [
      {
        question: 'React is for mobile applications',
        answer: 'False'
      },
      {
        question: 'React is a javascript library for building user interfaces on web',
        answer: 'True'
      }
    ]
  }
};

// functions to manipulate data - perform CRUD operations

export const getDecks = () => {
  return data;
};

export const getDeck = (id) => {
  return data[id];
};

export const saveDeckTitle = (title) => {
  data[title] = {
    title: `${title}`,
    questions: []
  }
}

export const addCardToDeck = ({title, card}) => {
  if(data[title] == undefined){
    data[title] = {
      title: `${title}`,
      questions: [
        card
      ]
    }
  } else {
    Object.assign(data, data[title].questions.concat(card), {})
  }
}