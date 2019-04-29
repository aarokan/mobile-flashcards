import React, {Component} from 'react'
import { Text, View } from 'react-native'
import TextButton from './TextButton'
import { clearAsyncStorage, setInitialDecks} from '../utils/api'
import { connect } from 'react-redux'
import { initialDecks } from '../utils/_flashcards'
import { receiveDecks, removeDecks } from '../actions'

class ClearAll  extends Component {
    
    render () {
        const { dispatch } = this.props
        return (
            <View>
                <View>
                    <Text> Clear All Decks </Text>
                    <TextButton 
                        onPress={() => {
                            dispatch(removeDecks())
                            clearAsyncStorage()
                            this.props.navigation.goBack()    
                        }}
                        style={{margin: 20}}>
                        CLEAR ALL DECKS
                    </TextButton>
                </View>
                <View>
                    <Text> Set Inital Decks </Text>
                    <TextButton 
                        onPress={() => {
                            dispatch(removeDecks())
                            clearAsyncStorage()
                            dispatch(receiveDecks(initialDecks))
                            setInitialDecks()
                            this.props.navigation.goBack() 
                        }}
                        style={{margin: 20}}>
                        SET INITIAL DECKS
                    </TextButton>
                </View>            
            </View>
        )
    }
}

export default connect()(ClearAll)