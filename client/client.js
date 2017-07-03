/**
 * Created by serj on 5/23/17.
 */
import React from 'react';
import {render} from 'react-dom';
import App from './components/App'
import configureStore from './redux/store';
import {Provider} from 'react-redux';

//configure and create store

let initialState = {
    todos: [{
        id: 0,
        completed: false,
        text: "init state"
    }]
};

let store = configureStore(initialState);

render(
    <Provider store={store}><App/></Provider>,
    document.getElementById('app')
);