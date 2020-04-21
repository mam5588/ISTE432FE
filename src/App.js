import React from 'react';
import './App.css';
import {Provider} from 'react-redux'; 
import NavBar from './components/layout/NavBar'
import Landing from './components/home/Landing';
import {HashRouter as Route} from 'react-router-dom';

import store from './store';


function App() {
  return (
    <Provider store={store}>
      <NavBar/>
      <div class="container">
      
        <Landing/>

        </div>
    </Provider>
  );
}

export default App;
