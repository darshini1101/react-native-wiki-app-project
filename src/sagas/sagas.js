import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { ARTICLES_SEARCH } from '../actions/types';
import { articlesSuccess, articlesFailed } from '../actions';


/* WORKER SAGA
*  A new task on each ACTION 
*  Worker saga: makes the api call when watcher saga sees the action
*  MAKE API CALL AND RETURN RESPONSE
*/
export function* createArticleAsync(action) {
    try {
        //make request API 
        const response = yield call(axios.get, 'https://en.wikipedia.org/api/rest_v1/page/related/' + action.word);
        console.log(response);
         // dispatch a success action to the store with the new articles
         // Action Creator
        yield put(articlesSuccess(response.data));
    } catch (e) {
        console.log(e.message);
        // dispatch a failure action to the store with the error
        yield put(articlesFailed(e.message));
    }
}

/* WATCHER SAGA
*  watcher saga: watches for actions dispatched to the store, starts worker saga 
*/
export function* watchCreateArticles() {
    //pass two arguments Action Name and will call our worker saga
    yield takeEvery(ARTICLES_SEARCH, createArticleAsync);
}

/*ROOT SAGA*/
//Root Saga Combine all our watcher sagas into one main root saga
export default function* rootSaga() {
    yield [
        watchCreateArticles(),
    ];
}
