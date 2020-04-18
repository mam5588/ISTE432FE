import React from 'react';

class Playlist extends React.Component{
    render(){
        return(
            <div className="playlist">
                <a href="https://www.google.com/">
                    <div className="playlist-img"><img src={this.props.url} alt="album cover"/></div>
                    <div>
                        <h1 className="playlist-title">{this.props.title}</h1>
                        <p>{this.props.desc}</p>
                    </div>
                </a>
            </div>
        );
    }
}

export default Playlist;