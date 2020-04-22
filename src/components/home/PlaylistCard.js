import React, { Component } from 'react'
import{Link} from 'react-router-dom';

export class PlaylistCard extends Component {
    render() {
        const playlist = this.props
        return (
                <div className="playlist-card">
                    <Link to={'/playlist/' + playlist.title}>
                        <img src={playlist.url} alt="hello"/>
                        <p>{playlist.title}</p>
                    </Link>
                </div>
        )
    }
}

export default PlaylistCard
