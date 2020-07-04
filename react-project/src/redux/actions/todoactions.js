
export const addTodo = (content) => {
    return {
        type: 'ADD_TODO',
        content
    }
}

export const toggleTodo = (index) => {
    return {
        type: 'TOGGLE_TODO',
        index
    }
}

export const deleteTodo = (index) => {
    return {
        type: 'DELETE_TODO',
        index
    }
}

export const addNotes = (index, notes) => {
    return {
        type: 'ADD_NOTES',
        index,
        notes
    }
}

export const deleteNote = (index) => {
    return {
        type: 'DELETE_NOTE',
        index
    }
}