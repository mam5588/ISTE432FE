import React from 'react';
import './App.css';
import {Provider} from 'react-redux'; 
import NavBar from './components/layout/NavBar'
import Landing from './components/home/Landing';
import {HashRouter as Router, Route} from 'react-router-dom';
import Playlist from './components/home/Playlist';



import store from './store';
import { HashRouter } from 'react-router-dom';


function App() {
  return (
    <Provider store={store}>
      <Router>
          <div>
          <NavBar/>
            <div className="container">
              <Route exact path="/" component={Landing}/>
              <Route exact path="/playlist/:id" component={Playlist}/>
            </div>
          </div>
        </Router>
    </Provider>
  );
}

export default App;
