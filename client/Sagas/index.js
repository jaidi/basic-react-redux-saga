import { takeLatest, all } from 'redux-saga/effects'
import API from '../services/api'
import FixtureAPI from '../services/FixtureApi'

/* ------------- Types ------------- */

import ActionTypes from '../redux/ActionTypes'

/* ------------- Sagas ------------- */

import RecipieCollectionSagas     from './RecipieCollectionSagas'
// IMPORT_SAGAS

const Sagas = {
  ...RecipieCollectionSagas,
  // SPREAD_SAGAS
}

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api =  FixtureAPI
// const api =  API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(ActionTypes.STARTUP, Sagas.startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(ActionTypes.FETCH_RECIPIE_COLLECTIONS_REQUEST, Sagas.makeFetchRecipieCollections, api),
    takeLatest(ActionTypes.SEARCH_RECIPIE_REQUEST, Sagas.makeSearchRecipie, api),
    // REGISTRER_SAGA
  ])
}
