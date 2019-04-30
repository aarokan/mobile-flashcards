import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import TextButton from './TextButton'

class Quizz extends Component {
    state = {
        cards: [],
        index: 0,
        score: 0,
        isQuestion: true,
    }

    componentDidMount () {
        const { title } = this.props.navigation.state.params
        const { decks } = this.props
        this.setState(() => ({
            cards: decks[title].cards
        }))
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

    getText = (isQuestion, question, answer) => {
        return (
            isQuestion === true 
            ?(<View>
                <Text>Question</Text>
                <Text>{question}</Text>
                <TouchableOpacity onPress={this.toggleQuestionAnswer}>
                    <Text>Answer</Text>
                </TouchableOpacity>
            </View>)
            :(<View>
                <Text>Answer</Text>
                <Text>{answer}</Text>
                <TouchableOpacity onPress={this.toggleQuestionAnswer}>
                    <Text>Question</Text>
                </TouchableOpacity>
            </View>)
        )
    }

    render () {
        const { cards, index, score, isQuestion } = this.state

        if (index < cards.length) {
            const question = cards[index].question
            const answer = cards[index].answer
        
            return (
                <View>
                    {this.getText(isQuestion, question, answer)}
                    <TextButton onPress={() => this.setIndex(true)}>
                        CORRECT 
                    </TextButton>
                    <TextButton onPress={() => this.setIndex(false)}>
                        INCORRECT 
                    </TextButton>
                </View>
            )
        }
        else {
            return (
                <View>
                    <Text>
                        Your Score : {score} / { cards.length }
                    </Text>
                </View>
            )
        }
    }
}

function mapStateToProps (decks) {
    return {
      decks
    }
  }
  
  export default connect(mapStateToProps)(Quizz)
  