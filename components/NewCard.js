import React, { Component } from 'react'
import { StyleSheet, KeyboardAvoidingView, TextInput } from 'react-native' 
import TextButton from './TextButton'
import { addCardToDeck, getDecks } from '../utils/api'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { addDeck } from '../actions'

class NewCard extends Component {
    state = {
        question: '',
        answer: '',
    }

    submit = (question, answer) => {

        const { decks, dispatch }=  this.props
        const { title } = this.props.navigation.state.params
        const cards = [...decks[title].cards, {question, answer}]
        const updatedDeck = {[title]: {title, cards}}

        // update Redux
        dispatch(addDeck(updatedDeck))

        this.setState(() => ({
            question: '',
            answer: ''
        }))
        
        // Save to "DB" & navigate to home
        addCardToDeck(title, question, answer).then(() => { this.toHome() })
    }

    toHome = () => {
        this.props.navigation.dispatch(NavigationActions.navigate({
            routeName: 'Home'
        }))
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
        return (
            <KeyboardAvoidingView style={styles.container}>
                <TextInput
                    value={question}
                    style={styles.input}
                    onChangeText={this.handleQuestionChange}/>
                <TextInput
                    value={answer}
                    style={styles.input}
                    onChangeText={this.handleAnswerChange}/>
                <TextButton 
                  onPress={() => {this.submit(question, answer)}}
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

function mapStateToProps(decks) {
    return { decks }
}

export default connect(mapStateToProps)(NewCard)
