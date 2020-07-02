import { combineReducers, applyMiddleware } from 'redux';
import todoReducer from './todoreducer';
import visibilityReducer from './visibilityReducer'
import initialState from '../initialState';
import thunk from 'redux-thunk';
import { newsReducer } from './newsreducer';

const middlewares = [thunk];

const rootReducer = combineReducers({
    todoState: todoReducer,
    visibility: visibilityReducer,
    newsState: newsReducer,
    newsMiddleware: applyMiddleware(...middlewares)
});

export default rootReducer;