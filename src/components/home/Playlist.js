import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPlaylist} from '../../actions/searchActions';

export class Playlist extends Component {

    componentDidMount(){
        this.props.fetchPlaylist(this.props.match.params.id)
    }
    render() {
        return (
            <div className="playlist-individual">
                <p className="placeholder">works</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.playlists.loading,
    playlist: state.playlists.playlist
})

export default connect(mapStateToProps, {fetchPlaylist})(Playlist)
