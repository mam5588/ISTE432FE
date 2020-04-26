import React, {Component } from 'react';
// import { Redirect } from "react-router-dom";
import axios from 'axios';
  // const client_id = 'bb8ae441c6dc4021872eec0ec91b5c65';
  // const client_secret = '8b4d58fcb6ae4cb793816b732e72eda7';
  
  // Login.get('/spotify-authorization', (req, res) => {
  //   axios({
  //     method: 'get',
  //     url: 'https://accounts.spotify.com/api/token',
  //     headers: {
  //       Authorization: 'Basic YmI4YWU0NDFjNmRjNDAyMTg3MmVlYzBlYzkxYjVjNjU6OGI0ZDU4ZmNiNmFlNGNiNzkzODE2YjczMmU3MmVkYTc=',
  //       grant_type: 'authorization_code',
  //       redirect_uri: 'http://localhost:3000/'

  //     }
  //   })
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  
  //   res.send('successful response received!');
  // });
  export const getToken = (code) => {
    return axios({
        method: 'post',
        url:'https://accounts.spotify.com/api/token',
        params: {
            client_id: 'bb8ae441c6dc4021872eec0ec91b5c65',
            client_secret: '8b4d58fcb6ae4cb793816b732e72eda7',
            code,
            grant_type :'authorization_code',
            redirect_uri: 'http://localhost:3000/'
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(token => {
        return token;
    }).catch(e=> {
        return e.response.data;
    });
  }


class Login extends Component {
  onSubmit= e =>{
    e.preventDefault();   
    // body = {
    //     grant_type: "authorization_code",
    //     code: params[:code],
    //     redirect_uri: "http://localhost:3000/",
    //     client_id: 'bb8ae441c6dc4021872eec0ec91b5c65',
    //     client_secret: '8b4d58fcb6ae4cb793816b732e72eda7'
    // } 
    // auth_response = RestClient.post('https://accounts.spotify.com/api/token',body)
    // auth_params = JSON.parse(auth_response.body)


}
state = { redirect: null };
  render() {
    var link = document.createElement('link');  
    link.rel = 'stylesheet';  
    link.type = 'text/css'; 
    link.href = 'index.css';
    // const onSubmit = data => console.log(data)
    
    return (
      <form onSubmit={this.handleSubmit}>
        <a className="link" href="https://accounts.spotify.com/authorize?client_id=bb8ae441c6dc4021872eec0ec91b5c65&response_type=code&scope=user-read-private%20user-read-email%20playlist-read-private&redirect_uri=http://localhost:3000/">
          Continue with Spotify </a>
      </form>

    );
  }
}

export default Login