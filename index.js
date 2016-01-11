import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
// TODO: Extract routes into a routes.js/jsx file
import Contacts from './components/Contacts'
import ContactForm from './components/ContactForm'
import configureStore from './store/configureStore'
import { Router, Route } from 'react-router'
import { createHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'

const store = configureStore()

const history = createHistory()
syncReduxAndRouter(history, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="#contacts" component={Contacts}/>
        <Route path="#contacts/new" component={ContactForm}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
