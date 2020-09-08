import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AddPost, UpdatePost } from './redux/state';
import { BrowserRouter, Route } from 'react-router-dom';

export let rerenderCurrentState = (state) => {
    return (
        ReactDOM.render(
            <App appState={state} 
                 AddPost={ AddPost }
                 UpdatePost={ UpdatePost } />, document.getElementById('root'))
    );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
