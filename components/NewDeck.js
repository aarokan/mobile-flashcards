import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    KeyboardAvoidingView,
    TextInput
} from 'react-native'
import TextButton from './TextButton'
import { saveDeckTitle } from '../utils/api'
import { connect } from 'react-redux'
import { addDeck } from '../actions'

class NewDeck extends Component {
    state = {
        title: ''
    }

    submit = () => {
        const { title }  = this.state
        const deck = {[title]: {title, 'cards':[]}}

        // Update redux
        this.props.dispatch(addDeck(deck))
        this.setState(() => ({
            title: ''
        }))

        // Navigate to home
        this.props.navigation.goBack()
        
        // Save to "DB"
        saveDeckTitle(title)

    }

    handleTextChange = (title) => {
        this.setState(() => ({
            title
        }))
    }

    render () {
        const { title } = this.state
        return (
            <KeyboardAvoidingView
                behavior='padding' 
                style={styles.container}>
                <Text>{`Title of New Deck : ${title}`}</Text>
                <TextInput
                    value={title}
                    style={styles.input}
                    onChangeText={this.handleTextChange}/>
                <TextButton 
                  onPress={this.submit}
                  style={{margin: 20}}>
                  SUBMIT
                </TextButton>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 25,
        backgroundColor: '#ecf0f1',
        margin: 50,
    },
    input : {
        width: 200,
        height: 44,
        padding: 8,
        borderWidth: 1,
        borderColor: '#757575',
        margin: 50
    }

})

export default connect()(NewDeck)