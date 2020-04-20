import {createStore, applyMiddleware} from 'redux'; 
import thunk from 'redux-thunk';
import {compositeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers';

const middlware = [thunk];
const initialState = {};

const store = createStore(rootReducer, initialState, compositeWithDevTools(applyMiddleware(...middlware)))

export default store;