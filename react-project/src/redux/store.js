import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { saveState } from './localStorage';
import { loadState } from './localStorage';
import throttle from 'lodash.throttle';


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
    saveState(store.getState());
});




export default store;