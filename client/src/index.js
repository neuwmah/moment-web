import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'
import store from './store/store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);