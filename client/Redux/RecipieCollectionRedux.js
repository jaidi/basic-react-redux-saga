import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { findIndex } from 'lodash'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  // add action here
fetchRecipieCollectionsRequest: ['resolve', 'reject'],
fetchRecipieCollectionsSuccess: null,
fetchRecipieCollectionsFailure: null,
saveRecipiesLocal: null,
changeRecipie: null,
saveRecipieToCollection: null,
updateRecipieRequest: null,
updateRecipieSuccess: null,
updateRecipieFailure: null,
addRecipieCollection: null,
addRecipieToCollection: null,
searchRecipieRequest: null,
searchRecipieSuccess: null,
searchRecipieFailure: null,
})

export const RecipieCollectionTypes = Types
export default Creators

/* ------------- Initial State ------------- */


export const INITIAL_STATE = Immutable({
  recipies: {
    breakfast: [
      { id: 1,
        name: 'omelate',
        description: 'lorem ipsum',
        ingredients: [ 'egg', 'oil', 'onion', 'pepper', 'salt',]
      },

    ],

  }
})

/* ------------- Reducers ------------- */

const fetchRecipieCollectionsRequest = (state, action) => 
  state.merge({requestingCollections: true})

const fetchRecipieCollectionsSuccess = (state, action) =>
  state.merge({requesting: false})

const fetchRecipieCollectionsFailure = (state, action) =>
  state.merge({requesting: false})

const saveRecipiesLocal = (state, { recipies }) =>
  state.merge({recipies})

const changeRecipie = (state, { recipieData }) => 
  saveRecipieToCollection(state, recipieData)

const saveRecipieToCollection = (state, recipieData) => {
  const recipie = recipieData.recipie
  const collectionName = recipieData.collectionName
  const rCollection = state.recipies[collectionName]
  if (rCollection) {
    const index = findIndex(rCollection, (id) => id === recipie.id)
    const updatedCollection = [rCollection.slice(0, index),
      recipie, rCollection.slice(index+1)]
    return state.setIn(['recipies', collectionName], rCollection)
  }
  return state
}

const updateRecipieRequest = ( state, { recipieData }) =>
  state.merge({requestingToUpdate: true})

const updateRecipieSuccess = ( state, { recipieData }) =>
  state.merge({requestingToUpdate: false})

const updateRecipieFailure = ( state, { recipieData }) =>
  state.merge({requestingToUpdate: false})

const addRecipieCollection = (state, { recipieCollection  }) =>
  state.merge({ ...state.recipies, recipieCollection })

const addRecipieToCollection = (state, { recipieData }) =>
  saveRecipieToCollection(state, recipieData)

const searchRecipieRequest = (state, action) => 
  state.merge({ requestingToSearch: true })

const searchRecipieSuccess = (state, action) => 
  state.merge({ requestingToSearch: false })

const searchRecipieFailure = (state, action) => 
  state.merge({ requestingToSearch: false })
// add new reducer here

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_RECIPIE_COLLECTIONS_REQUEST]: fetchRecipieCollectionsRequest,
  [Types.FETCH_RECIPIE_COLLECTIONS_SUCCESS]: fetchRecipieCollectionsSuccess,
  [Types.FETCH_RECIPIE_COLLECTIONS_FAILURE]: fetchRecipieCollectionsFailure,
  [Types.SAVE_RECIPIES_LOCAL]: saveRecipiesLocal,
  [Types.CHANGE_RECIPIE]: changeRecipie,
  [Types.SAVE_RECIPIE_TO_COLLECTION]: saveRecipieToCollection,
  [Types.UPDATE_RECIPIE_REQUEST]: updateRecipieRequest,
  [Types.UPDATE_RECIPIE_SUCCESS]: updateRecipieSuccess,
  [Types.UPDATE_RECIPIE_FAILURE]: updateRecipieFailure,
  [Types.ADD_RECIPIE_COLLECTION]: addRecipieCollection,
  [Types.ADD_RECIPIE_TO_COLLECTION]: addRecipieToCollection,
  [Types.SEARCH_RECIPIE_REQUEST]: searchRecipieRequest,
  [Types.SEARCH_RECIPIE_SUCCESS]: searchRecipieSuccess,
  [Types.SEARCH_RECIPIE_FAILURE]: searchRecipieFailure,
  // add reducer hook up here
})
