import React, { Component, PropTypes } from 'react'
import Contact from './Contact'
import { Link } from 'react-router'

class Contacts extends Component {

  render() {
    const { state, dispatch, removeContact } = this.props

    return (
      <div>
        <h2 className="page-header text-center">List of contacts</h2>
        <p className="text-center">
          <Link to="/contacts/new" className="btn btn-lg btn-outline">Add Contact</Link>
        </p>
        <ul className="media-list row contacts-container">
          {
            state.data.contacts.map( contact =>
              <Contact key={contact.id} contact={contact} dispatch={dispatch} removeContact={removeContact}/>
            )
          }
        </ul>
      </div>
    )
  }

}

Contacts.propTypes = {
  state: PropTypes.object.isRequired
}

export default Contacts
