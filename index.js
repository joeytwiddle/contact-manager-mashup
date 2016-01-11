import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
// TODO: Extract routes into a routes.js/jsx file
import Contacts from './containers/Contacts'
import ContactForm from './containers/ContactForm'
import configureStore from './store/configureStore'
import { Router, Route } from 'react-router'
import { createHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'

const store = configureStore()

const history = createHistory()
//const middleware = syncHistory(history);
syncReduxAndRouter(history, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Contacts}/>
      <Route path="/contacts/new" component={ContactForm}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
