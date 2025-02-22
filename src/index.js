import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from “./reducers”;
import redux from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,    composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>, 
    document.getElementById('root'));

