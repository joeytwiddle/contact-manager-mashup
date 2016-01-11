import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class ContactForm extends Component {

  onChangeHandlerFor(field) {
    return (event) => {
      let value = event.target.value
      let update = {}
      update[field] = value
      this.setState(update);
    }
  }

  render() {
    //console.log("[ContactForm.js] this.props:", this.props);

    let { isNew, dispatch, contact = {} } = this.props

    // It is better to wait for form 'submit' event than for a click on the submit button
    // Because forms could also be submitted by user hitting <Enter> in one of the form inputs, or <Space> on the submit button.
    const onSubmit = (event) => {
      event.preventDefault()
      console.log("[ContactForm.js] this:", this);
      let newContactDetails = this.state
      console.log("[ContactForm.js] newContactDetails:", newContactDetails);
      console.log("[ContactForm.js] this.props.dispatch:", this.props.dispatch);

      //dispatch( this.props.addContact(newContactDetails) )
      // It seems we don't need to dispatch, this is enough
      this.props.addContact(newContactDetails)

      // This feels naughty.  It might not be the proper way.
      // (It likely wouldn't work at all if we hadn't added the "optional" history in index.js)
      this.props.history.pushState("/contacts")
    }

    return (
      <div>
        <h2 className="page-header text-center">{ isNew ? 'Create' : 'Edit' } Contact</h2>
        <form role="form" className="form-horizontal contract-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label className="col-sm-4 control-label">Full name:</label>
            <div className="col-sm-6">
              <input type="text" className="form-control contact-name-input" value={ contact.name } onChange={this.onChangeHandlerFor('name')}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-4 control-label">Email address:</label>
            <div className="col-sm-6">
              <input type="email" className="form-control contact-email-input" value={ contact.email } onChange={this.onChangeHandlerFor('email')}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-4 control-label">Telephone number:</label>
            <div className="col-sm-6">
              <input type="tel" className="form-control contact-tel-input" value={ contact.tel } onChange={this.onChangeHandlerFor('tel')}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-4 col-sm-3">
              <Link to="/contacts" className="btn btn-lg btn-link pull-right">Cancel</Link>
            </div>
            <div className="col-sm-3">
              <button type="submit" className="btn btn-lg btn-block btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

// TODO
ContactForm.propTypes = {
  //addContact: PropTypes.func.isRequired
}

export default ContactForm
