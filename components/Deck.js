import React, { Component } from 'react'
import { View } from 'react-native'
import DeckDetail from './DeckDetail'
import TextButton from './TextButton'



class Deck extends Component {
    render () {
        const { title, cards } = this.props.navigation.state.params
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <DeckDetail 
                    title={title}
                    cards={cards} />
                <TextButton 
                    onPress={() => this.props.navigation.navigate('Quizz',{ title })}>
                    START QUIZZ
                </TextButton>
                <TextButton 
                    onPress={() => this.props.navigation.navigate('NewCard',{ title })}>
                    ADD CARD
                </TextButton>
            </View>
        )
    }
}

export default Deck
    
 