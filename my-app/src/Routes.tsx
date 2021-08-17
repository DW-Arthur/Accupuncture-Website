import { defaultMaxListeners } from 'events';
import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import history from './history';
import Home from './components/Home/Home'

export default class Routes extends Component{
    render(){
        return(
            //
            
            <BrowserRouter>
                <Route path ="/" exact component={Home}/>
            </BrowserRouter>
            

            

        )
    }
}