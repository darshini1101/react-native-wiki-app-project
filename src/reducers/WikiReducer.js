//Import ACTIONS TYPES
import { 
    ARTICLES_SEARCH, 
    ARTICLES_SUCCESS, 
    ARTICLES_FAILED, 
    MODAL_CLOSE, 
    ARTICLES_SELECTED 
} from '../actions/types';


// reducer with initial state
const INITIAL_STATE = {
    word: '',
    data: [],
    uri: ''
};

//Reducer
export default(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ARTICLES_SEARCH:
            return {
                ...state, 
                word: action.word
            };
        case MODAL_CLOSE:
            return {
                ...state, 
                uri: ''
            };
        case ARTICLES_SELECTED:
        return {
            ...state, 
            uri: action.article.content_urls.mobile.page
        };
        case ARTICLES_SUCCESS:
            return {
                ...state, 
                data: action.articles
        };
        case ARTICLES_FAILED:
            return {
                ...state, 
                data: []
        };
        default:
            return state;
    }
};

