import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Admin from '../pages/Admin'

function router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/admin">
                    <Admin />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default router
