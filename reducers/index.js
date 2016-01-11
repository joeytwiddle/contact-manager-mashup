import { routeReducer } from 'redux-simple-router'
import { combineReducers } from 'redux'
import contacts from './contacts'

const rootReducer = combineReducers({
  contacts,
  routing: routeReducer
})

export default rootReducer
