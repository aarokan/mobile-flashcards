import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
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
                <View style={styles.deckButtons}>
                    <TextButton 
                        onPress={() => this.props.navigation.navigate('Quizz',{ title })}>
                        START QUIZZ
                    </TextButton>
                    <TextButton 
                        onPress={() => this.props.navigation.navigate('NewCard',{ title })}>
                        ADD CARD
                    </TextButton>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deckButtons : {
        flex: 1,
        justifyContent: 'space-around',
    }
})

export default Deck
    
 