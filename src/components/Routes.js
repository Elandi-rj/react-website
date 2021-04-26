import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Splashscreen from './splashscreen'
import Home from './home'
import Topic from './topic';

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Splashscreen />
            </Route>
            <Route exact path="/home">
                <Home />
            </Route>
            <Route exact path="/topic1">
                <Topic />
            </Route>
        </Switch>
    )
}
export default Routes;