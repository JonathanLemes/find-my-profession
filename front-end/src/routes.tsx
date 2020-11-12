import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Pricing from './pages/Pricing';
import Checkout from './pages/Checkout';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/pricing/:url" exact component={Pricing} />
                <Route path="/checkout/:id" exact component={Checkout} />
            </Switch>
        </BrowserRouter>
    )
}