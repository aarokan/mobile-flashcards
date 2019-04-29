import React, { Component } from 'react'
import { View } from 'react-native'
import DeckDetail from './DeckDetail'
import TextButton from './TextButton'



class Deck extends Component {
    render () {
        const { title, cards } = this.props.navigation.state.params
        return (
            <View>
                <DeckDetail 
                    title={title}
                    cards={cards} />
                <TextButton 
                    onPress={() => this.props.navigation.navigate('NewCard',{ title })}
                    style={{margin: 20}}>
                    ADD CARD
                </TextButton>
            </View>
        )
    }
}

export default Deck
    
 