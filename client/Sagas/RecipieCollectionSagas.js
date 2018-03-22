import { call, put } from 'redux-saga/effects'
import get from 'lodash/get'
import Actions from '../Redux/Actions'

function * makeFetchRecipieCollections (api, action) {
  const { resolve, reject } = action
  const response = yield call(api.fetchRecipieCollectionsRequest, token)
  if (response.ok) {
    const data = get(response, 'data.data')
    yield put(Actions.fetchRecipieCollectionsSuccess())
    yield put(Actions.saveRecipiesLocal(data))
    return resolve(data)
  } else {
    reject("error")
  }
}

function * makeSearchRecipie (api, action) {
  const { resolve, reject } = action
  const response = yield call(api.searchRecipieRequest, token)
  if (response.ok) {
    const data = get(response, 'data.data')
    yield put(Actions.searchRecipieSuccess())
    return resolve(data)
  } else {
    reject("error")
  }
}

// ADD_SAGA_ACTION

export default {
  makeFetchRecipieCollections,
  makeSearchRecipie,
  // EXPORT_SAGA_ACTION
}
