import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/homepage'
import DetailProduct from '../pages/detail_product'

class Routes extends Component {


    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route exact path="/product/:id" component={DetailProduct} ></Route>
                {/* <Route component={NotFound}></Route> */}
            </Switch>
        )
    }
}


export default Routes