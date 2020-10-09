import { createStore, combineReducers, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'

import calculatorReducer from './reducer/Calculator.reducer'
import newsReducer from './reducer/News.reducer'
import usersReducer from './reducer/Users.reducer'

const rootReducer = combineReducers({
    calculator: calculatorReducer,
    news: newsReducer,
    users: usersReducer
})

const persistedReducer = persistReducer({
    key: 'root',
    storage
}, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk)) 
export const persistedStore = persistStore(store)