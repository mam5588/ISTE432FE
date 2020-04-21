import {SEARCH_PLAYLIST} from '../actions/types';

const initialState = {
    text: '',
    playlist : [],
    loading: false,
    movie: []
}

export default function(state = initialState, action){
    switch(action.type){
        case SEARCH_PLAYLIST:
            return {
                ...state, 
                text: action.payload,
                loading: false
            }
        default: 
            return state
    }
}