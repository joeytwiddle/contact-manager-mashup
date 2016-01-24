import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class ContactForm extends Component {

/*
const ContactForm = React.createClass({

  getInitialState () {
    return { ...this.props.contact }
  }
*/

  constructor(props, context) {
    super(props, context)
    this.state = { ...this.props.contact }
  }

  componentDidMount () {
    // Put keyboard focus on the first element, so the user can start typing
    document.querySelector("form input").focus()
  }

  componentWillUnmount () {
  }

  render () {
    //console.log("[ContactForm.js] this.props:", this.props);

    let { isNew, onSubmitCallback } = this.props

    const onChangeHandlerFor = (field) => (event) =>
      this.setState({
        [field]: event.target.value
      })

    // It is better to listen for form 'submit' event than for a click on the submit button
    // Because forms could also be submitted by user hitting <Enter> in one of the form inputs, or <Space> on the submit button.
    const onSubmit = (event) => {
      event.preventDefault()

      // This is the state of this component, not the state of the app.
      // onChangeHandlerFor saved the values here.
      const newContactDetails = this.state

      const submitOK = onSubmitCallback(newContactDetails, this.props)
      // We get the action back; no way to pass success/fail boolean back
      console.log("[ContactForm.js] submitOK:", submitOK);

      if (submitOK) {
        this.props.history.pushState("/contacts")
      }
    }

    return (
      <div>
        <h2 className="page-header text-center">{ isNew ? 'Create' : 'Edit' } Contact</h2>
        <form role="form" className="form-horizontal contract-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label className="col-sm-4 control-label">Full name:</label>
            <div className="col-sm-6">
              <input type="text" className="form-control contact-name-input" value={ this.state.name } onChange={onChangeHandlerFor('name')}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-4 control-label">Email address:</label>
            <div className="col-sm-6">
              <input type="email" className="form-control contact-email-input" value={ this.state.email } onChange={onChangeHandlerFor('email')}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-4 control-label">Telephone number:</label>
            <div className="col-sm-6">
              <input type="tel" className="form-control contact-tel-input" value={ this.state.tel } onChange={onChangeHandlerFor('tel')}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-4 col-sm-3">
              <Link to="/contacts" className="btn btn-lg btn-link pull-right">cancel</Link>
            </div>
            <div className="col-sm-3">
              <button type="submit" className="btn btn-lg btn-block btn-primary">{ isNew ? "Create" : "Update" }</button>
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
