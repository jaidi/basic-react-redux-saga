import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  recipie: require('./RecipieCollectionRedux').reducer
  // ADD_REDUX_REDUCER
})

export default configureStore(reducers, rootSaga)
