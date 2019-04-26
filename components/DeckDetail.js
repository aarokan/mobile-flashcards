import React from 'react'
import { View, Text } from 'react-native'

export default function DeckDetail ({ title, questions }) {
    const cardsStr = questions.length > 1 ? 'cards' : 'card'
    return (
        <View>
            <Text>{title}</Text>
            <Text>{`${questions.length} ${cardsStr}`}</Text>
        </View>
    )
}