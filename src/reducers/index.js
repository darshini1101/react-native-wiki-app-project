//Import Combine Reducers
import { combineReducers } from 'redux';
import WikiReducer from './WikiReducer';

//Combine Reducers
export default combineReducers({
    wikiView: WikiReducer
});
