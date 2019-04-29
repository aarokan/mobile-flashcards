import React, { Component } from 'react'
import { StyleSheet, View, KeyboardAvoidingView, Text, TextInput } from 'react-native' 
import TextButton from './TextButton'
import { addCardToDeck } from '../utils/api'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { addDeck } from '../actions'

class NewCard extends Component {
    state = {
        question: 'Your question here',
        answer: 'The answer here',
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
            <View style={styles.container}>
                <View style={styles.input}>
                    <Text>Your Question :</Text>
                    <KeyboardAvoidingView >
                        <TextInput
                            value={question}
                            style={styles.inputField}
                            clearTextOnFocus={true}
                            onChangeText={this.handleQuestionChange}/>
                    </KeyboardAvoidingView>
                </View>
                <View style={styles.input}>
                    <Text>The Answer :</Text>
                    <KeyboardAvoidingView>
                        <TextInput
                            value={answer}
                            style={styles.inputField}
                            clearTextOnFocus={true}
                            onChangeText={this.handleAnswerChange}/>
                    </KeyboardAvoidingView>
                </View>
                <TextButton 
                    onPress={() => {this.submit(question, answer)}}>
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
        flex: 1,
        alignItems: 'center',
    },
    inputField : {
        width: 225,
        height: 40,
        padding: 8,
        borderWidth: 1,
        borderColor: '#757575',
        margin: 8,
    }
})

function mapStateToProps(decks) {
    return { decks }
}

export default connect(mapStateToProps)(NewCard)
