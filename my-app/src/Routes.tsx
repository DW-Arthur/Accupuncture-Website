import { defaultMaxListeners } from 'events';
import React, {Component} from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home'

export default class Routes extends Component{
    render(){
        return(
            //
            
            <Switch>
                <Route path ="/Home" exact component={Home}/>
            </Switch>
            

        )
    }
}