import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    KeyboardAvoidingView,
    TextInput
} from 'react-native'
import TextButton from './TextButton'

export default class NewDeck extends Component {
    state = {
        title: ''
    }

    submit = () => {
        // Add new deck
        // Navigate to Deck
        alert('Hello')
    }

    handleTextChange = (title) => {
        this.setState(() => ({
            title
        }))
    }

    render () {
        const { title } = this.state
        return (
            <View style={styles.container}>
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
            </View>
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