import React, { Component } from 'react'
import { View } from 'react-native'
import DeckDetail from './DeckDetail'
import TextButton from './TextButton'



class Deck extends Component {
    render () {
        const title = this.props.navigation.state.params.title
        return (
            <View>
                <DeckDetail 
                    title={title}
                    questions={this.props.navigation.state.params.questions} />
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
    
