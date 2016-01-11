import React, { Component, PropTypes } from 'react'
import Contact from './Contact'

import { pushPath } from 'redux-simple-router'

class Contacts extends Component {
  render() {
    const { state } = this.props
    //console.log("[Contacts.js] state:", state);
    // mapDispatchToProps has also put all of our dispatch functions into this.props?
    return (
      <div>
        <h2 className="page-header text-center">List of contacts</h2>
        <p className="text-center">
          <a href="#contacts/new" className="btn btn-lg btn-outline">Add Contact</a>
          <a onClick={() => dispatch(pushPath('/#contacts/new'))} className="btn btn-lg btn-outline">Add Contact (pushPath)</a>
        </p>
        <ul className="media-list row contacts-container">
          {
            // TODO: Nobody knows why we have contactception here
            state.contacts.contacts.map( contact =>
              <Contact key={contact.id} contact={contact} />
            )
          }
        </ul>
      </div>
    )
  }
}

        /*
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={() => incrementAsync()}>Increment async</button>
        */

Contacts.propTypes = {
  state: PropTypes.object.isRequired
  /*
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  */
}

export default Contacts
