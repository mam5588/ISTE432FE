import {combineReducers} from 'redux';
import searchReducer from './searchReducer';

export default combineReducers({
    playlists: searchReducer
});