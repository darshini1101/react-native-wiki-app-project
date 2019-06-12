//Import react Library and view
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import WikiView from '../src/containers/WikiView';
import rootSaga from './sagas/sagas';

//Functional Components 
//Wrap the view with the Provider
//Pass the provide a store
class App extends Component {
    render() {
        //Create the saga middleware and pass root saga
        const sagaMiddleware = createSagaMiddleware();

        //mount it on the Store
        const store = createStore(reducers, applyMiddleware(sagaMiddleware));
        
        //then run the saga
        sagaMiddleware.run(rootSaga);
        
        return (
            <Provider store={store}>
                <WikiView />
            </Provider>
        );
    }
}

export default App;
