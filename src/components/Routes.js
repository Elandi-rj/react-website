import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Splashscreen from './splashscreen'
import Home from './home'

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Splashscreen />
            </Route>
            <Route exact path="/home">
                <Home />
            </Route>
        </Switch>
    )
}
export default Routes;