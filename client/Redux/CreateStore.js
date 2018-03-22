import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

// creates the store
export default (rootReducer, rootSaga) => createStore(rootReducer)