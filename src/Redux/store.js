import {createStore} from 'redux';
import {combineReducers} from "redux";
import {createBrowserHistory} from 'history';
import rootReducer from "./rootReducer";
import { reducer as formReducer } from 'redux-form'


const store = createStore(
    combineReducers({
        ...rootReducer,
        form: formReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

const history = createBrowserHistory();
export {store, history};
