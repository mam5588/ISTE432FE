import React, { Component } from 'react'

import {connect} from 'react-redux'

import PlaylistCard from './PlaylistCard'

export class PlaylistContainer extends Component {
    render() {

        const {playlists} = this.props;
        let content = '';

        content = playlists.length > 0 ? playlists.map((plist) => <PlaylistCard url={plist.url} title={plist.title}/>) : null;

        return (
            <div className="playlist-container">
                {content}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    playlists: state.playlists.playlists
})

export default connect(mapStateToProps)(PlaylistContainer)
