import React, {useState} from 'react';
import Modal from 'react-modal';
function NavBar(){
    const [modalIsOpen, setModalIsOpen] = useState(false);
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
                    <li>
                        <button className="button-modal"  onClick={()=>setModalIsOpen(true)}></button>
                    </li>
                </ul>
            </div>
            <Modal className="modal" isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}>
                <h2 className="modal-title">Audiocracy Help</h2>
                <p className="modal-desc">We provide the ability for you to share your spotify playlists with your friends and have them rate and comment on them.

This is a listing of the playlists we currently have in the system. You can peruse the various playlists which our users have chosen to share with you.

Clicking on one of these playlists brings you into a more detailed screen which describes the playlist's name, author and a list of the tracks which belong to the playlist including the track's author. At the top of the page you can choose a ranking of 1-5 and click the 'Add Comment' button to provide your feedback to the author on how much you like the playlist or your suggestions on how the author might redesign the playlist.

The 'My Playlists' section displays all of the playlists which you have worked on developing in Spotify. If you click the 'Share' button, your playlist will be viewable here on Audiocracy and let your friends rate and comment on them.

The Settings page allows you to view the different settings of your account on Audiocracy including your display name and when you joined our system.

Hope you like our new approach to exploring everyones music tastes and have fun!</p>
                <div>
                    <button className="button-quit" onClick={()=>setModalIsOpen(false)}></button>
                </div>
            </Modal>
        </div>
    )
}

export default NavBar;