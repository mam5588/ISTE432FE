import React from 'react';

class Navigation extends React.Component{
    render(){
        return(
            <div className="navigation">
                <h1 className="logo">AUDIOCRACY</h1>
                <ul>
                    <li className="options"> My Profile </li>
                    <li className="options"> My Playlists </li>
                    <li className="options"> My Favorites </li>
                </ul>
		    </div>
        );
    }
}

export default Navigation;