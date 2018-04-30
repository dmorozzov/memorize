import React, {Component} from 'react'
import {Link, Route, Switch} from 'react-router-dom';
import Words from "./components/Words";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="ui main container shift_content">
                  <Switch>
                      <Route exact path='/' component={Words}/>
                      <Route path='*' component={NotFound}/>
                  </Switch>
                </div>
            </div>
        )
    }
}
