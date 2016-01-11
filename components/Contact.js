import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Contact extends Component {
  render() {
    let { contact, dispatch } = this.props
    //console.log("[Contact.js] contact:", contact);
    //console.log("[Contact.js] dispatch:", dispatch);
    return (
      <li className="media col-md-6 col-lg-4">
        <div className="thumbnail">
          <img className="media-object" src={`/app/img/faces/${contact.avatar}`}/>
        </div>
        <div className="media-heading">
          <h3>
            { contact.name }
            <small>
              <Link to={`/contacts/edit/${contact.id}`}>
                <span className="glyphicon glyphicon-pencil"></span>
              </Link>
              <Link to={`/contacts/delete/${contact.id}`} className="delete-contact">
                <span className="glyphicon glyphicon-trash"></span>
              </Link>
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
        <hr/>
      </li>
    )
  }
}

// TODO
Contact.propTypes = {
}

export default Contact
