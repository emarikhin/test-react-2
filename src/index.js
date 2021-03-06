import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import { AddPost } from './redux/state';
import { rerenderCurrentState } from './render';

// AddPost('Eugene is great');

// ReactDOM.render(<App appState={state} AddPost = {AddPost}/>, document.getElementById('root'));

rerenderCurrentState(state);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
