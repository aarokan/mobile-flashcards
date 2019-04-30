import React , { Component } from 'react'
import { View, ScrollView, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import DeckDetail from './DeckDetail'
import { getDecks } from '../utils/api'
import { AppLoading } from 'expo'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import { floralWhite } from '../utils/colors'

class Decks extends Component {

    state = {  
      ready : false,
      bounceValue: new Animated.Value(1)
    }
      
    componentDidMount () {
      const { dispatch } = this.props
      
      getDecks()
        .then((decks) => dispatch(receiveDecks(decks)))
        .then(() => this.setState(() => ({ 
          ready : true 
        })))
      
    }

    toDeck = (title, cards) => {
      const { bounceValue } = this.state
      
      Animated.sequence([
        Animated.timing(bounceValue, {duration: 180, toValue: 1.04}),
        Animated.spring(bounceValue, {toValue: 1, friction: 4})  
      ]).start(() => { this.props.navigation.navigate('Deck',{ title, cards })})  
    } 
  
    render () {
      const { decks } = this.props
      const { ready, bounceValue } = this.state
      
      if (ready === false)  {
        return <AppLoading />
      }

      return (
        <ScrollView>
          {Object.keys(decks).map((key) => {
            const { title, cards } = decks[key]
            return (
              <Animated.View style={[styles.item, {transform: [{scale: bounceValue}]}]} key={title}>
                <TouchableOpacity 
                  onPress={() => this.toDeck(title, cards)} >
                  <DeckDetail
                    title={title}
                    cards={cards}
                  />
                </TouchableOpacity>
              </Animated.View>
            )
          })}

        </ScrollView> 
      )
    }
    
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item : {
    paddingBottom: 6,
    backgroundColor: floralWhite,
    margin: 10,
    borderRadius: 10,
  }
})

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Decks)

