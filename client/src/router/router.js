import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Banlist from '../pages/Banlist'
import Admin from '../pages/Admin'

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import AdminNavbar from '../components/AdminNavbar'

function router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Header />
                    <Navbar />
                    <Home />
                </Route>
                <Route path="/loja">
                    <Header />
                    <Navbar />
                    <Shop />
                </Route>
                <Route path="/banimentos">
                    <Header />
                    <Navbar />
                    <Banlist />
                </Route>
                <Route path="/admin">
                    <AdminNavbar />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default router
