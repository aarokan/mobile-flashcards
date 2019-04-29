import { AsyncStorage } from 'react-native'
import { FLASHCARDS_KEY, initialDecks } from './_flashcards'



export function saveDeckTitle ( title ) {
    return AsyncStorage.mergeItem(FLASHCARDS_KEY, JSON.stringify({ 
        [title]:{
            'title': title,
            'cards': []
        }
    })) 
}

export function getDecks () {
    return AsyncStorage.getItem(FLASHCARDS_KEY)
    .then((results) => JSON.parse(results) )
}

export function getDeck (title) {
    return getDecks()
    .then((decks) => decks[title])
}

export function addCardToDeck(title, question, answer) {
    return getDeck(title)
    .then((deckContent) => {
        updatedCards = [...deckContent.cards, {question, answer}]
        return AsyncStorage.mergeItem(FLASHCARDS_KEY, JSON.stringify({
            [title]: {
                'title' : title,
                'cards' : updatedCards
            } 
        }))
    })
}

export function clearAsyncStorage () {
    return AsyncStorage.removeItem(FLASHCARDS_KEY)
}

export function setInitialDecks () {
    return AsyncStorage.setItem(FLASHCARDS_KEY, JSON.stringify(initialDecks))
}