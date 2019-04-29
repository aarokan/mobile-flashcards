import React , { Component } from 'react'
import { View, ScrollView, TouchableOpacity } from 'react-native'
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
  
    render () {
      const { decks } = this.props
      const { ready } = this.state
      
      if (ready === false)  {
        return <AppLoading />
      }

      return (
        <ScrollView>
          {Object.keys(decks).map((key) => {
            const { title, cards } = decks[key]
            return (
              <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Deck',{ title, cards })}
                key={title} >
                <DeckDetail
                  title={title}
                  cards={cards}
                />
              </TouchableOpacity>
            )
          })}

        </ScrollView> 
      )
    }
    
}

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Decks)

