import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Contact extends Component {

  render() {
    let { contact, dispatch } = this.props
    //console.log("[Contact.js] contact:", contact);
    //console.log("[Contact.js] dispatch:", dispatch);

    let onClickDelete = (e) => {
      e.preventDefault()
      this.props.removeContact( this.props.contact.id )

      // TODO: This is a prototype, it should be cleaned up!
      // One existing issue is that the .popup-container can block things
      // behind it from being clicked, when the message is visible, and when it
      // is not.
      var messageElem = document.getElementById('contact-deleted-warning-message');
      messageElem.className = "notice-box warning smooth-show";
      setTimeout(function () {
        messageElem.className = "notice-box warning";
      }, 4000);
    }

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
              <Link to="" className="delete-contact" onClick={onClickDelete}>
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

// This is needed or won't see the store
Contact.contextTypes = {
  //  store: React.PropTypes.object
}

export default Contact
