import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import { Router, Route, Redirect, Link } from 'react-router'
import { createHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'

//TODO: Extract routes into a routes.js/jsx file
//import App from './containers/App'
import Contacts from './containers/Contacts'
import NewContactForm from './containers/NewContactForm'
import EditContactForm from './containers/EditContactForm'

const store = configureStore()
console.log("[index.js] store.getState():", store.getState());

const history = createHistory()
//const middleware = syncHistory(history);
syncReduxAndRouter(history, store)

var unsubscribe = store.subscribe( () =>
                                  console.log("Store was updated", store)
                                 )

render(
  <Provider store={store}>
    <Router history={history}>
      <Redirect path="/" to="/contacts"/>
      <Route path="/contacts" component={Contacts}/>
      <Route path="/contacts/new" component={NewContactForm}/>
      <Route path="/contacts/edit/:contactId" component={EditContactForm}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
