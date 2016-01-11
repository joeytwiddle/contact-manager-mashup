import { connect } from 'react-redux'
import ContactForm from '../components/ContactForm';
import { addContact } from '../actions/contacts.js'

import * as ContactManagerActions from '../actions/contacts'

console.log("[NewContactForm.js] ContactManagerActions:", ContactManagerActions);

import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
  return {
    state: state,
    isNew: true
  }
}

// This provides 'dispatch' to the component, but no actions
//export default connect(mapStateToProps)(ContactForm)

// This provides the 'addContact' action to the component, but loses the 'dispatch' function!
// Oh that appears to be ok.  We don't need to dispatch function (unless we want to 
export default connect(mapStateToProps, {
  addContact
})(ContactForm)

// This passed all the action constructor functions, but no 'dispatch' function.
// Maybe that's ok; they can bind to 'dispatch' if they want to (as seen in the counter example)
//function mapDispatchToProps(dispatch) {
  //return bindActionCreators(ContactManagerActions, dispatch)
//}
//export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
