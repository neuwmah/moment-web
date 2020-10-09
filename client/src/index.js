import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Router from './router/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'
import { store, persistedStore } from './store/store'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistedStore}>
                <Router />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);