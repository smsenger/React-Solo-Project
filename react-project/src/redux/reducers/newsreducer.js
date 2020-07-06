import { NEWS_API_PENDING, UPDATE_ARTICLES } from '../actions/newsactions';
import { NEWS_API_SUCCESS } from '../actions/newsactions';
import { NEWS_API_ERROR } from '../actions/newsactions';
import { loadState } from "../localStorage"

const localState = loadState()

const initialState = localState ? localState.newsState : null || {
    pending: false,
    articles: [],
    error: null
}

export function newsReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_ARTICLES:
            return {
                ...state,
                articles: action.payload
            }
        case NEWS_API_PENDING:
            return {
                ...state,
                pending: true
            }
        case NEWS_API_SUCCESS:
            return {
                ...state,
                pending: false,
                products: action.payload
            }
        case NEWS_API_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }

        case 'GET_LOCAL_STORAGE':
            return { ...state, articles: action.payload }

        default:
            return state;
    }
}

export const newsApiPending = state => state.pending;
export const newsApiSuccess = state => state.news;
export const newsApiError = state => state.error;