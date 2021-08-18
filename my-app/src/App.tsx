import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { defaultMaxListeners } from 'events';
import React, {Component} from 'react';
import history from './history';
import Home from './components/Home/Home'
import About from './components/About/About'
import Navbar  from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
        
       <BrowserRouter>
          <Route path ="/" exact component={Home}/>
          <Route path ="/about" exact component ={About}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
