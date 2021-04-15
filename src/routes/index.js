import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/homepage'

class Routes extends Component {


    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                {/* <Route component={NotFound}></Route> */}
            </Switch>
        )
    }
}


export default Routes