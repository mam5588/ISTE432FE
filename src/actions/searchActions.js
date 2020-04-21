import {SEARCH_PLAYLIST, FETCH_PLAYLIST} from './types';
import axios from 'axios';


export const searchPlaylist = text => dispatch => {
    dispatch({
        type: SEARCH_PLAYLIST,
        payload: text
    });
};

export const fetchPlaylists = text => dispatch => {
    // HERE HAPPENS BACK END CALLS
    // fetch('https://jsonplaceholder.typicode.com/photos')
    // .then(response => response.json())
    // .then(json => console.log(json))
    // .catch(err => console.log(err))

    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(response => dispatch({
        type: FETCH_PLAYLIST,
        payload: response.data
    }))
    .then(response => console.log(response))
    .catch(err => console.log(err))
//     fetch('https://jsonplaceholder.typicode.com/photos')
//   .then(response => response.json())
//   .then(json => console.log(json))
}