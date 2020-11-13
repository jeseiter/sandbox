import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {createEpicMiddleware} from 'redux-observable';
// import createSagaMiddleware from 'redux-saga'
import epics from './epics';
// import sagas from './sagas';
// import thunk from 'redux-thunk';
import {logger} from 'redux-logger';
import reducer from './reducers';
import App from './App';

const initialState = {
    posts: [
        {title: 'Title 1'},
        {title: 'Title 2'},
        {title: 'Title 3'},
        {title: 'Title 4'},
        {title: 'Title 5'}
    ]
};

// const store = createStore(
//     reducer,
//     initialState,
//     applyMiddleware(thunk, logger)
// );

const epicMiddleware = createEpicMiddleware();
const store = createStore(
    reducer,
    initialState,
    applyMiddleware(epicMiddleware, logger)
);

epicMiddleware.run(epics);

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(
//     reducer,
//     initialState,
//     applyMiddleware(sagaMiddleware, logger)
// );
//
// sagaMiddleware.run(sagas);

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
);

