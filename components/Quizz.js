import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import TextButton from './TextButton'
import { purple, gray, red, green } from '../utils/colors'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

class Quizz extends Component {
    state = {
        cards: [],
        index: 0,
        score: 0,
        isQuestion: true,
        title: ''
    }

    componentDidMount () {
        const { title } = this.props.navigation.state.params
        const { decks } = this.props
        this.setState(() => ({
            cards: decks[title].cards,
            title: title,
        }))
    }

    resetQuizz = () => {
        this.setState(()=> ({
            index: 0,
            score: 0,
            isQuestion: true,
        }))
    }

    backToDeck = () => {
        const { title, cards } = this.state
        this.props.navigation.navigate('Deck', {title, cards})
    }

    toggleQuestionAnswer = () => {
        const {isQuestion} = this.state
        this.setState(() => ({
            isQuestion: !isQuestion
        }))
    }

    setIndex = (correctAnswer) => {
        const { index, score } = this.state
        inc = correctAnswer ? 1 : 0
        this.setState(() => ({
            score : score + inc,
            index: index + 1,
            isQuestion: true
        }))
    }

    getText = (isQuestion, question, answer, remaining) => {
        return (
            isQuestion === true 
            ?(<View style={styles.questionContainer}>
                <Text style={styles.questionLabel}>Question</Text>
                <Text style={styles.question}>{question}</Text>
                <TouchableOpacity onPress={this.toggleQuestionAnswer}>
                    <Text style={styles.toggle}>Answer</Text>
                </TouchableOpacity>
                <Text style={styles.questionLabel}>
                    {`# Remaining Questions : ${remaining} `}
                </Text>
            </View>)
            :(<View style={styles.questionContainer}>
                <Text style={styles.questionLabel}>Answer</Text>
                <Text style={styles.question}>{answer}</Text>
                <TouchableOpacity onPress={this.toggleQuestionAnswer}>
                    <Text style={styles.toggle}>Question</Text>
                </TouchableOpacity>
                <Text style={styles.questionLabel}>
                    {`# Remaining Questions : ${remaining} `}
                </Text>
            </View>)
        )
    }

    render () {
        const { cards, index, score, isQuestion } = this.state

        if (index < cards.length) {
            const question = cards[index].question
            const answer = cards[index].answer
            const remaining = cards.length - index - 1
        
            return (
                <View style={styles.container}>
                    {this.getText(isQuestion, question, answer,remaining)}
                    <View style={styles.questionButtons}>
                        <TextButton 
                            onPress={() => this.setIndex(true)}
                            style={{backgroundColor:green}}>
                            CORRECT 
                        </TextButton>
                        <TextButton 
                            onPress={() => this.setIndex(false)}
                            style={{backgroundColor:red}}>
                            INCORRECT 
                        </TextButton>
                    </View>
                </View>
            )
        }
        else {
            if (Platform.OS === 'android') {
                clearLocalNotification()
                .then(setLocalNotification)
            }
            return (
                <View style={styles.container}>
                    <View>
                        <Text style={styles.scoreText}>
                            Your Score : {score} / { cards.length }
                        </Text>
                    </View>
                    <View style={styles.scoreButtons}>
                        <TextButton onPress={() => this.resetQuizz()}>
                            RESTART QUIZZ 
                        </TextButton>
                        <TextButton onPress={() => this.backToDeck()}>
                            BACK TO DECK 
                        </TextButton>
                    </View>
                </View>

            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    questionContainer: {
        flex: 0.8,
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 50,
    }, 
    questionButtons: {
        flex: 0.6,
        justifyContent: 'space-around'
    },
    question: {
        fontSize: 20,
        color: purple, 
        padding: 10,
    },
    questionLabel: {
        color: gray,
        fontSize: 13,
        paddingTop: 10,
    },
    toggle: {
        color: purple,
        fontSize: 13,
        fontStyle: 'italic',
        textDecorationLine: 'underline'
    },
    scoreText: {
        fontSize: 20,
        color: purple,
    }, 
    scoreButtons: {
        flex: 0.75,
        justifyContent: 'space-around',
    }
})

function mapStateToProps (decks) {
    return {
      decks
    }
  }
  
  export default connect(mapStateToProps)(Quizz)
  