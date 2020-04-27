const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const http = require('http');
const https = require('https');

const passport = require("passport");
const SpotifyStrategy = require("passport-spotify").Strategy;
const keys = require("../config/index");
const chalk = require("chalk");
const user = {};



passport.serializeUser((user, cb)=>{
    cb(null, user);
});

passport.deserializeUser((user, cb)=>{
    cb(null, user);
});

//SPOTIFY STRATEGY
passport.use(new SpotifyStrategy({
    clientID: keys.SPOTIFY.clientID,
    clientSecret: keys.SPOTIFY.clientSecret,
    callbackURL: "/auth/spotify/callback"
    }, (accessToken, refreshToken, profile, cb)=>{
        console.log(chalk.blue(JSON.stringify(profile)));
        user = {...profile};
        return cb(null, profile);
    }));

const app = express();
app.use(cors());
app.use(passport.initialize());

app.get("/auth/spotify", passport.authenticate(spotify));
app.get("auth/spotify/callback", passport.authenticate(spotify), (req, res)=>{
    res.redirect("/");
});

app.get("/user", (req, res)=>{
    console.log("getting user data");
    res.send(user);
});

app.get("/auth/logout", (req, res)=>{
    console.log("logging out!");
    user={};
    res.redirect("/");
});
const PORT = 5000; 
app.listen(PORT);