import React , { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import DeckDetail from './DeckDetail'
import { getDecks } from '../utils/api'
import { AppLoading } from 'expo'




export default class Decks extends Component {
    state = {
      decks : {}
    }
      
    componentDidMount () {
      getDecks()
        .then((decks) => this.setState(() => ({ decks })))
    }

        
    
/*
    addDeck = (deck) => {
        // todo : check that we cannot add a deck with an already existing title !!!!
        this.setState((state) => {
            return {
                ...state,
                [deck.title] : deck
            }
        })
    }

  */

    submit = () => {
      // Navigate to newDeck
      alert('Hello')
    }
    
    render () {
  
      if ( this.state === {} ) {
        return <AppLoading />
      }

      const { decks } = this.state
      return (  
        <View>
          {Object.keys(decks).map((key) => {
            const { title, questions } = decks[key]
            return (
              <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Deck',{ title, questions })}
                key={title} >
                <DeckDetail
                  key={title}
                  title={title}
                  questions={questions}
                />
              </TouchableOpacity>
            )
          })}
        </View>
      )
    }
}