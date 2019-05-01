# Mobile-Flashcards project 
A mobile (React Native) application to help you memorize questions and answers related to your chosen topics.
You can create decks of cards, each card being a question with its answer, an a deck being a set of cards related to a topic.
You can take a quizz on a deck, setting a mark correct/incorrect on each card of the deck and obtaining your score.
# Installation 
In the project directory where this file is located and where you can find the file [package.json](./package.json) listing all the dependencies, 
run the following commands to install the required libraries and to start a local server:
```
$ npm install
$ yarn start
````
Start an (ios/android) phone simulator. 
Following the command (yarn start), Expo CLI starts Metro Bundler which is an HTTP server that compiles the JS code and serves your app. You can then connect
this server to your simulator (see page localhost:19002)
# Usage
Once the application runs on our simulator, just try on the tabs (Decks, Add Deck, Clear) and access the decks by clicking on them. 
# Notes
Local Notifications should work only with Android.
I have tested only on ios simulator (iPhone SE)
I had to use these specific versions :
react-navigation: 1.5.11
react-redux: 6.0.0
