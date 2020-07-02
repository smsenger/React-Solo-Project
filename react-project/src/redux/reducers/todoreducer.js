const initialState = {
    tasks: [{
        name: 'Add a task',
        complete: false,
        notes: ''
    }],
}



function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        name: action.content,
                        complete: false
                    }
                ]
            }

        case 'TOGGLE_TODO':
            const newTask = { ...state.tasks[action.index] };
            newTask.complete = !newTask.complete;

            const newTasks = state.tasks.map((task, index) => {
                if (index === action.index) {
                    return newTask;
                }
                return task;
            })
            return {
                ...state,
                tasks: newTasks
            }

        case 'DELETE_TODO':
            const remainingTasks = state.tasks.filter((task, index) => {
                if (index !== action.index) {
                    return true;
                }
                return false;
            })
            return {
                ...state,
                tasks: remainingTasks
            }
        case 'ADD_NOTES':
            console.log('this')
            const updateTask = { ...state.tasks[action.index] }
            updateTask.notes = action.notes
            console.log(updateTask)
            const updateTasks = [...state.tasks]
            console.log(updateTasks)
            updateTasks.splice(action.index, 1, updateTask)
            return {
                ...state,
                tasks: updateTasks
            }


        default:
            return state;
    }
}

export default todoReducer;