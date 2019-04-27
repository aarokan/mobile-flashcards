import React , { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import DeckDetail from './DeckDetail'
import { getDecks } from '../utils/api'
import { AppLoading } from 'expo'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'


class Decks extends Component {

    state = {  
      ready : false
    }
      
    componentDidMount () {
      const { dispatch } = this.props

      getDecks()
        .then((decks) => dispatch(receiveDecks(decks)))
        .then(() => this.setState(() => ({ 
          ready : true 
        })))
    }
/*
    getDecks()
        .then((decks) => { 
          this.setState(() => ({ decks, ready : true }))
        })
      }
*/
  

        
    
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
    
    render () {

      const { decks } = this.props
      const { ready } = this.state
      
      if (ready === false)  {
        return <AppLoading />
      }
      
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

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Decks)