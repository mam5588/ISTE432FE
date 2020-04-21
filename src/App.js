import React from 'react';
import './App.css';
import {Provuder, Provider} from 'react-redux';
import NavBar from './components/layout/NavBar'
import Landing from './components/home/Landing';
import {HashRouter as Route} from 'react-router-dom';

import store from './store';


function App() {
  return (
    <Provider store={store}>
      <NavBar/>
      <Landing/>
    </Provider>
  );
}

export default App;
