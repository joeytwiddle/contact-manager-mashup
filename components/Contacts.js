import React, { Component, PropTypes } from 'react'

// TODO: This should be in its own file
class Contact extends Component {
  render() {
    //console.log("[Contacts.js:Contact::render()] contact:", contact);
    //console.log("[Contacts.js:Contact::render()] this:", this);
    let contact = this.props.contact
    return (
      <li className="media col-md-6 col-lg-4">
        <div className="thumbnail">
          <img className="media-object" src={"app/img/faces/" + contact.avatar} />
        </div>
        <div className="media-heading">
          <h3>
            { contact.name }
            <small>
              <a href="#contacts/edit/{ contact.id }"><span className="glyphicon glyphicon-pencil"></span></a>
              <a href="#contacts/delete/{ contact.id }" className="delete-contact">
                <span className="glyphicon glyphicon-trash"></span>
              </a>
            </small>
          </h3>
        </div>
        <div className="media-body">
          <dl>
            <dt>Phone Number:</dt>
            <dd>{ contact.tel }</dd>
            <dt>Email:</dt>
            <dd>{ contact.email }</dd>
          </dl>
        </div>
        <hr />
      </li>
    )
  }
}

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
        </p>
        <ul className="media-list row contacts-container">
          {
            // TODO: Nobody knows why we have contactception here
            state.contacts.contacts.map( contact =>
              <Contact contact={contact} />
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

/*

    <script type="text/template" id="tpl-contacts">
    </script>

    <script type="text/template" id="tpl-contact">
    </script>

    <script type="text/template" id="tpl-new-contact">
      <h2 className="page-header text-center"><%= isNew ? 'Create' : 'Edit' %> Contact</h2>
      <form role="form" className="form-horizontal contract-form">
        <div className="form-group">
          <label className="col-sm-4 control-label">Full name:</label>
          <div className="col-sm-6">
            <input type="text" className="form-control contact-name-input" value="<%- name %>">
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-4 control-label">Email address:</label>
          <div className="col-sm-6">
            <input type="email" className="form-control contact-email-input" value="<%- email %>">
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-4 control-label">Telephone number:</label>
          <div className="col-sm-6">
            <input type="tel" className="form-control contact-tel-input" value="<%- tel %>">
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-4 col-sm-3">
            <button type="submit" className="btn btn-outline btn-lg btn-block">Submit</button>
          </div>
          <div className="col-sm-3">
            <a href="#contacts" className="btn btn-outline btn-lg btn-block">Cancel</a>
          </div>
        </div>
      </form>
    </script>

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
