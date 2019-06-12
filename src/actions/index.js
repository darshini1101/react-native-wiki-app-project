// Import action types
import { 
    ARTICLES_SEARCH,
    ARTICLES_SUCCESS,
    ARTICLES_FAILED,
    MODAL_CLOSE, 
    ARTICLES_SELECTED 
} from './types';

//Action Creators
//Define Actions Creators with argument
export const articlesSearch = (text) => {
    //return actions as object with action type and payload
    return {
        type: ARTICLES_SEARCH,
        word: text
    };
};

export const articlesSuccess = (data) => {
    return {
        type: ARTICLES_SUCCESS,
        articles: data.pages
    };
};

export const articlesFailed = (data) => {
    return {
        type: ARTICLES_FAILED,
        articles: data
    };
};

export const modalClose = () => {
    return {
        type: MODAL_CLOSE
    };
};

export const articlesSelected = (selected) => {
    return {
        type: ARTICLES_SELECTED,
        article: selected
    };
};
