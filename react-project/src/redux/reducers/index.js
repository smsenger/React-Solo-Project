import { combineReducers, applyMiddleware } from 'redux';
import todoReducer from './todoreducer';
import visibilityReducer from './visibilityReducer'
import initialState from '../initialState';
import { newsReducer } from './newsreducer';
import { notesReducer } from './notesreducer'



const rootReducer = combineReducers({
    todoState: todoReducer,
    visibility: visibilityReducer,
    newsState: newsReducer,
    notesState: notesReducer,

});

export default rootReducer;