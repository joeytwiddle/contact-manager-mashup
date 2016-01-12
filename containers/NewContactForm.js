import { connect } from 'react-redux'
import ContactForm from '../components/ContactForm';
import { addContact } from '../actions/contacts.js'

import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
  return {
    //state: state,
    isNew: true
  }
}

function onSubmitCallback(newContactDetails, ctx) {
  //dispatch( this.props.addContact(newContactDetails) )
  // We don't need to call dispatch directly; whatever we return will be dispatched
  return addContact(newContactDetails)
}

// This provides 'dispatch' to the component, but no actions
//export default connect(mapStateToProps)(ContactForm)

// This provides the 'onSubmitCallback' function to the component, but loses the 'dispatch' function!
export default connect(mapStateToProps, {
  onSubmitCallback
})(ContactForm)

// This passed all the action constructor functions, but no 'dispatch' function.
// Maybe that's ok; they can bind to 'dispatch' if they want to (as seen in the counter example)
//import * as ContactManagerActions from '../actions/contacts'
//console.log("[NewContactForm.js] ContactManagerActions:", ContactManagerActions);
//function mapDispatchToProps(dispatch) {
  //return bindActionCreators(ContactManagerActions, dispatch)
//}
//export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
