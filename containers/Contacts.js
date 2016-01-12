import { connect } from 'react-redux'
import Contacts from '../components/Contacts';
import { removeContact } from '../actions/contacts.js'

function mapStateToProps(state) {
  return {
    state: state   // :)
  }
}

export default connect(mapStateToProps, {
  removeContact
})(Contacts);
