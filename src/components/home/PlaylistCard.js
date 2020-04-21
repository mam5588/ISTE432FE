import React, { Component } from 'react'

export class PlaylistCard extends Component {
    render() {
        const playlist = this.props
        return (
            <div className="playlist-card">
                <img src={playlist.url}/>
                <p>{playlist.title}</p>
            </div>
        )
    }
}

export default PlaylistCard
