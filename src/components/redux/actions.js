export function doSearch(index) {
    return {
        type: 'DO-SEARCH',
        index
    }
}

export function showResults(index) {
    return {
        type: 'SHOW_RESULTS',
        index
    }
}

export function showItem(index) {
    return {
        type: 'SHOW_ITEM',
        index
    }
}

export function addItem(index) {
    return {
        type: 'ADD_ITEM',
        index
    }
}