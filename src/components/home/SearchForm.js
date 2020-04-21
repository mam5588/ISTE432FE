import React, { Component } from 'react';
import {searchPlaylist, fetchPlaylists} from '../../actions/searchActions';

import {connect} from 'react-redux'

export class SearchForm extends Component {

    onChange = e => {
        this.props.searchPlaylist(e.target.value);
    };

    onSubmit= e =>{
        e.preventDefault();
        this.props.fetchPlaylists(this.props.text);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                    className="search-bar"
                    type="text" 
                    name="searchText" 
                    placeholder="Search Playlists..."
                    autoComplete="off"
                    onChange={this.onChange}
                    />
                    <button type="submit" className="button">Search</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    text: state.playlists.text
});

export default connect(
    mapStateToProps, 
    {searchPlaylist, fetchPlaylists}
    )(SearchForm);
