import { connect } from 'react-redux'
import ContactForm from '../components/ContactForm';
import { addContact } from '../actions/contacts.js'

function mapStateToProps(state) {
  return {
    isNew: true
  }
}

function onSubmitCallback(newContactDetails, ctx) {
  return addContact(newContactDetails)
}

export default connect(mapStateToProps, {
  onSubmitCallback
})(ContactForm)
