# README
## Description
 Mobile Flashcard is a complete solution to practise and remember what you learned. Whether you want to study for an upcoming exam, want to make sure you retain what you learned or just want to practise remembering things, this app is with you on your journey.
  
This mobile application allows users to study collections of flashcards, create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

## Platform Supported
Mobile flash card has been developed and tested with only iOS Users in mind. Currently the platform support is only `iOS`

## Installation
Pre-requisites for the following setup:
 1. You must have an iPhone mobile or xcode simulator.
 2. Install `expo` app from `App store` for mobile.
 3. For further details of `expo` setup, refer this link and follow the setup -> https://docs.expo.io/versions/latest/ 

Steps to get this app working on local.
   1. Clone the repo using `git clone <click on green clone or download button on github and paste the contents>`
   2. Install project dependencies using `npm install` or `yarn install`
   3. Run server locally using `npm start` or `yarn start`. This should open a browser with a bar code.
   4. Open your camera app on iphone and move the camera in front of the barcode. If you have already installed `expo` app, this should pull up your app on `expo`

## Data
The `_DATA.js` file represents a fake database that let you access the data. There is one type of objects stored in our database:
 1.  data

### Users

data include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | Integer           | The deck's unique identifier |
| title          | String           | The deck’s title    |
| questions | Array | A list of ids of question and answers|
| question      | Object         |  The object's keys are question. The value of each key is the question text. 
| answer      | Object         |  The object's keys are answer. The value of each key is the answer text.

The code will talk to the database via 4 methods:
* `getDecks()`
* `getDeck(id)`
* `saveDecktitle(title)`
* `saveQuestionForDeck(deckId, card)`

1) `getDecks()` Method

*Description*: Get all of the existing decks from the database.  
*Return Value*: Parsed JSON

2) `getDeck()` Method

*Description*: Get the matching deck with the id passed in as argument from the database.  
*Return Value*: Parsed JSON deck with matching id.

3) `saveDeckTitle()` Method

*Description*: Add a new deck with the title argument passed in the database.  
*Return Value*:  Parsed JSON new created and added deck. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the deck randomly generated|
| title| String | The title of the deck |
| questions | Array | Empty array  |


4) `addQuestionToDeck()` Method

*Description*: Take in two arguments `deckId` and `card`, adds it to the deck matching the deckId and save it in the database.
*Return Value*: Parsed Json that contains the following properties: `id`, `title`, `question` and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the deck randomly generated|
| title| String | The title of the deck |
| questions | Array | Includes objects with question and answer  |
| question | Object | Object with the key `question` and question text as value  |
| questions | Object | Object with the key `answer` and answer text as value  |