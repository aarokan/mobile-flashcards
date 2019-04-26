import React, { Component } from 'react'
import { StyleSheet, View, TextInput } from 'react-native' 
import TextButton from './TextButton'

export default class NewCard extends Component {
    state = {
        question: '',
        answer: '',
    }

    submit = (title) => {
        alert(title)
    }

    handleQuestionChange = (question) => {
        this.setState(() => ({
            question
        }))
    }

    handleAnswerChange = (answer) => {
        this.setState(() => ({
            answer
        }))
    }

    render () {
        const { question, answer } = this.state
        const title = this.props.navigation.state.params.title
        return (
            <View style={styles.container}>
                <TextInput
                    value={question}
                    style={styles.input}
                    onChangeText={this.handleQuestionChange}/>
                <TextInput
                    value={answer}
                    style={styles.input}
                    onChangeText={this.handleAnswerChange}/>
                <TextButton 
                  onPress={() => {this.submit(title)}}
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
