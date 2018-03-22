console.log('Hey guys and !!')
import  store  from './Redux'
import Actions from './Redux/Actions'

debugger
const fetchRecipies = new Promise((resolve, reject) => {
      debugger
      return store.dispatch(Actions.fetchRecipieCollectionsRequest(resolve, reject))
    })
// store.dispatch(Actions.fetchRecipieCollectionsRequest())
// debugger
fetchRecipies()
.then((data) => {
  debugger
  console.log(data)
})
.catch(console.log)