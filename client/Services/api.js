// a library to wrap and simplify api calls
import apisauce from 'apisauce'

const create = (baseURL = 'http://localhost:3000/api/v1/') => {

  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      'Accept': 'application/json',
    },
    timeout: 10000
  })
  const fetchRecipieCollectionsRequest = (token) => api.get('/getRecipies', {}, { headers: { 'Authorization': token } })
  const searchRecipieRequest = (token) => api.get('/search_recipie_request', {}, { headers: { 'Authorization': token } })
  // ADD_API_HANDLER

  return {
    // a list of the API functions from step 2
    fetchRecipieCollectionsRequest,
    searchRecipieRequest,
    // EXPORT_API_HANDLER
  }
}

export default {
  create
}
