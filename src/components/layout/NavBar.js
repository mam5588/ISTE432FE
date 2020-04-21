import React from 'react';

function NavBar(){
    return(
        <div className="navigation-bar">
            <div>
                <h1 className="title">AUDIOCRACY</h1>
            </div>
            <div className="menu">
                <ul>
                    <li>My Profile</li>
                    <li>My Playlists</li>
                    <li>My Favorites</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;