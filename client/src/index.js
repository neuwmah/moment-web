import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router/router'
import 'bootstrap/dist/css/bootstrap.min.css'

import './styles/main.scss'

ReactDOM.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>,
    document.getElementById('root')
);