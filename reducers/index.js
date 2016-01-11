import { routeReducer } from 'redux-simple-router'
import { combineReducers } from 'redux'
import contacts from './contacts'

import { UPDATE_PATH } from 'redux-simple-router'

function logUpdates(state = {}, action) {
  switch (action.type) {
    case UPDATE_PATH:
      console.log("Path updated!", action.payload.path, action);
      return state
    default:
      return state
  }
}

const rootReducer = combineReducers({
  contacts,
  routing: routeReducer,
  logUpdates
})

export default rootReducer
