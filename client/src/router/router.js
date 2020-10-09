import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import New from '../pages/New'
import Shop from '../pages/Shop'
import Banlist from '../pages/Banlist'

import AdminHome from '../pages/Admin/AdminHome'
import NewAdd from '../pages/Admin/NewAdd'
import NewEdit from '../pages/Admin/NewEdit'
import NewRemove from '../pages/Admin/NewRemove'
import UserAdd from '../pages/Admin/UserAdd'
import UserEdit from '../pages/Admin/UserEdit'
import UserRemove from '../pages/Admin/UserRemove'


function router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route 
                    path="/" 
                    component={Home} 
                    exact
                />
                <Route 
                    path="/novidades/:slug" 
                    component={New}
                />
                <Route 
                    path="/loja"
                    component={Shop} 
                />
                <Route 
                    path="/banimentos"
                    component={Banlist} 
                />

                <Route
                    path="/admin"
                    component={AdminHome}
                    exact
                />
                <Route 
                    path="/admin/novidades/adicionar"
                    component={NewAdd} 
                />
                <Route 
                    path="/admin/novidades/editar"
                    component={NewEdit} 
                />
                <Route 
                    path="/admin/novidades/deletar"
                    component={NewRemove} 
                />
                <Route 
                    path="/admin/usuarios/adicionar"
                    component={UserAdd} 
                />
                <Route 
                    path="/admin/usuarios/editar"
                    component={UserEdit} 
                />
                <Route 
                    path="/admin/usuarios/deletar"
                    component={UserRemove} 
                />
            </Switch>
        </BrowserRouter>
    )
}

export default router
