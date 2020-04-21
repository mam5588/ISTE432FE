import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Spinner from '../layout/Spinner';

import {connect} from 'react-redux';
import PlaylistsContainer from './PlaylistContainer'

export class Landing extends Component {
    render() {
        const {loading} = this.props;
        return (
            <div className="search-form">
                <SearchForm />
                {loading ? <Spinner/> : <PlaylistsContainer/>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.playlists.loading
})

export default connect(mapStateToProps)(Landing)
