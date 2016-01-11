import { connect } from 'react-redux'
import ContactForm from '../components/ContactForm';

// Function passed in to `connect` to subscribe to Redux store updates.
// Any time it updates, mapStateToProps is called.
function mapStateToProps(state) {
  /*
  return {
    contactIndex: state.indexOfContactSelectedForEditing,
    contact: state.contacts.filter(c => c.id === state.indexOfContactSelectedForEditing)[0]
  };
  */
  return {
    state: state   // :)
  }
}

export default connect(mapStateToProps)(ContactForm);
