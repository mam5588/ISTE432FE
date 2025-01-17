import {SEARCH_PLAYLIST, FETCH_PLAYLISTS, FETCH_PLAYLIST} from '../actions/types';

const initialState = {
    text: '',
    playlists : [],
    loading: false,
    playlist: []
}

export default function(state = initialState, action){
    switch(action.type){
        case SEARCH_PLAYLIST:
            return {
                ...state, 
                text: action.payload,
                loading: false
            };
        case FETCH_PLAYLISTS:
            return {
                ...state, 
                playlists: action.payload,
                loading: false
            };
        case FETCH_PLAYLIST:
            return {
                ...state, 
                playlist: action.payload,
                loading: false
            };
        default: 
            return state
    }
}