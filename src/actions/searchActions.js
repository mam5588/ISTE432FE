import {SEARCH_PLAYLIST} from './types';
import axios from 'axios';

export const searchPlaylist = text => dispatch => {
    dispatch({
        type: SEARCH_PLAYLIST,
        payload: text
    });
};

export const fetchPlaylists = text => dispatch => {
    fetch()
}