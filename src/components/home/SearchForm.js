import React, { Component } from 'react';
import {searchPlaylist} from '../../actions/searchActions';

import {connect} from 'react-redux'

export class SearchForm extends Component {

    onChange = e => {
        this.props.searchPlaylist(e.target.value);
    };

    render() {
        return (
            <div>
                <form>
                    <input 
                    className="search-bar"
                    type="text" 
                    name="searchText" 
                    placeholder="Search Playlists..."
                    autoComplete="off"
                    onChange={this.onChange}
                    />
                    <button type="submit" class="button">Search</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    text: state.playlists.text
});

export default connect(mapStateToProps, {searchPlaylist})(SearchForm);
