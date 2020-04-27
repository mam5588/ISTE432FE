import React from "react";
import {data} from "../../data/index";
import {Router, Route, Link} from "react-router-dom";

const SpotifyLogin = ({data}) =>{
    return (
        <Link to="auth/spotify">
            <div>
                Login with spotify
            </div>
        </Link>
    );
};

export default SpotifyLogin;