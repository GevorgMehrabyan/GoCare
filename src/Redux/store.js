import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import rootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as formReducer } from 'redux-form'

import { combineReducers } from 'redux';

const store = createStore(
    combineReducers({
            ...rootReducer,
            form: formReducer
    }),
    composeWithDevTools(
        applyMiddleware(thunk)
    ));

const history  = createBrowserHistory();

export {store , history}

