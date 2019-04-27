import { AsyncStorage } from 'react-native'
import { FLASHCARDS_KEY, initialDecks } from './_flashcards'



export function saveDeckTitle ( title ) {
    return AsyncStorage.mergeItem(FLASHCARDS_KEY, JSON.stringify({ 
        [title]:{
            'title': title,
            'questions': []
        }
    })) 
}

export function clearAsyncStorage () {
    return AsyncStorage.removeItem(FLASHCARDS_KEY)
}

export function getDecks () {
    return AsyncStorage.getItem(FLASHCARDS_KEY)
    .then( (results) => JSON.parse(results) )
}

export function getDeck (title) {
    return AsyncStorage.getItem(FLASHCARDS_KEY)
        .then( (decks) => JSON.parse(decks)[title] )
}

export function addCardToDeck(title, card) {
    getDeck(title)
    .then((deck) => {
        return AsyncStorage.mergeItem(FLASHCARDS_KEY, JSON.stringify({
            [title]: {
                'title' : title,
                'cards' : [...deck.cards, card]
            } 
        }))
    })
}