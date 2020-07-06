export const NEWS_API_PENDING = 'NEWS_API_PENDING'
export const NEWS_API_SUCCESS= 'NEWS_API_SUCCESS';
export const NEWS_API_ERROR = 'NEWS_API_ERROR'
export const UPDATE_ARTICLES = 'UPDATE_ARTICLES'


export const newsApiPending = () => {
    return {
        type: NEWS_API_PENDING
    }  
} 

export const newsApiSuccess = (data) => {
    return {
        type: NEWS_API_SUCCESS,
        payload: data
    }
}

export const newsApiError = (error) => {
    return {
        type: NEWS_API_ERROR,
        error: error
    }
} 

export const updateArticles = (articles) => {
    return {
        type: UPDATE_ARTICLES,
        payload: articles
    }
}

export function getLocalStorage(articles) {
    return {type: 'GET_LOCAL_STORAGE', payload: articles}
}