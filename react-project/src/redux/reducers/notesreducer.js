import { loadState } from "../localStorage"

const localState = loadState()

const initialState = localState.notesState || {
    cards: [],
}

export function notesReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_CARD':
            const addCard = {}
            const addCards = [...state.cards, addCard]
            return {
                ...state,
                cards: addCards
            }

        case 'DELETE_CARD':
            console.log(action)
            const remainingCards = state.tasks.filter((cards, index) => {
                if (index !== action.index) {
                    return true;
                }
                return false;
            })
            return {
                ...state,
                cards: remainingCards
            }

            case 'UPDATE_CARD':
                console.log(action)
                const updateCard = { ...state.cards[action.index] }
                updateCard.title = action.title
                updateCard.note = action.note
                const updateCards = [...state.cards]
                updateCards.splice(action.index, 1, updateCard)
                return {
                    ...state,
                    cards: updateCards
                }

            default: 
                return state
    }
} 