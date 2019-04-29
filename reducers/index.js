import { RECEIVE_DECKS, ADD_DECK, REMOVE_DECKS } from '../actions'

function decks ( state = {}, action ) {
    switch (action.type) {
        case RECEIVE_DECKS :
            return { 
                ...state, 
                ...action.decks 
            }
        case ADD_DECK :
            return {
                ...state,
                ...action.deck
            }
        case REMOVE_DECKS :
            return {}
        default :
            return state
    }
}

export default decks