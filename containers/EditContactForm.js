import { connect } from 'react-redux'
import ContactForm from '../components/ContactForm';

function mapStateToProps(state) {
  console.log("[ContactForm.js:mapStateToProps] state:", state);
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
