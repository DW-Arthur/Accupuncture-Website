import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { defaultMaxListeners } from 'events';
import React, {Component} from 'react';
import history from './history';
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Route path ="/" exact component={Home}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
