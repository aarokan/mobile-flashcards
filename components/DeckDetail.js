import React from 'react'
import { View, Text } from 'react-native'

export default function DeckDetail ({ title, cards }) {
    const cardsStr = cards.length > 1 ? 'cards' : 'card'
    return (
        <View>
            <Text>{title}</Text>
            <Text>{`${cards.length} ${cardsStr}`}</Text>
        </View>
    )
}


