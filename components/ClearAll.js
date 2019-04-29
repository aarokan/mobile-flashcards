import React, {Component} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import TextButton from './TextButton'
import { clearAsyncStorage, setInitialDecks} from '../utils/api'
import { connect } from 'react-redux'
import { initialDecks } from '../utils/_flashcards'
import { receiveDecks, removeDecks } from '../actions'

class ClearAll  extends Component {
    
    render () {
        const { dispatch } = this.props
        return (
            <View style={styles.container}>
                <TextButton 
                    onPress={() => {
                        dispatch(removeDecks())
                        clearAsyncStorage()
                        this.props.navigation.goBack()    
                    }}>
                    CLEAR ALL DECKS
                </TextButton>
                <TextButton 
                    onPress={() => {
                        dispatch(removeDecks())
                        clearAsyncStorage()
                        dispatch(receiveDecks(initialDecks))
                        setInitialDecks()
                        this.props.navigation.goBack() 
                    }}>
                    SET INITIAL DECKS
                </TextButton>           
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },

})

export default connect()(ClearAll)