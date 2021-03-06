import { connect } from 'react-redux'
import ContactForm from '../components/ContactForm';
import { modifyContact } from '../actions/contacts.js'

// Quick stand-in for Underscore
const _ = {
  last: (list) => list[list.length - 1],

  find: (list, condition) => list.filter(condition)[0]
}

function mapStateToProps(state) {
  const contactId = Number( _.last(state.routing.path.split('/')) )
  const contact = _.find(state.data.contacts, (contact) => contact.id === contactId)

  return {
    contact: contact,
    isNew: false
  }
}

function onSubmitCallback(newContactDetails, props) {
  const contactId = props.contact.id

  return modifyContact(contactId, newContactDetails)
}

export default connect(mapStateToProps, {
  onSubmitCallback
})(ContactForm)
