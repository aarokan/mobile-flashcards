import React , { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import DeckDetail from './DeckDetail'



export default class Decks extends Component {
    state = {
            React: {
              title: 'React',
              questions: [
                {
                  question: 'What is React?',
                  answer: 'A library for managing user interfaces'
                },
                {
                  question: 'Where do you make Ajax requests in React?',
                  answer: 'The componentDidMount lifecycle event'
                }
              ]
            },
            JavaScript: {
              title: 'JavaScript',
              questions: [
                {
                  question: 'What is a closure?',
                  answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
              ]
            }
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
        return (
            <View>
                {Object.keys(this.state).map((key) => {
                    const { title, questions } = this.state[key]

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