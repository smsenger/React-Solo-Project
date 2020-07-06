export const addCard = () => {
    return {
        type: 'ADD_CARD',

    }
}

export const deleteCard = (index) => {
    return {
        type: 'DELETE_CARD',
        index
    }
}

export const updateCard = (index, title, note) => {
    return {
        type: 'UPDATE_CARD',
        index, 
        title,
        note,
    }
}