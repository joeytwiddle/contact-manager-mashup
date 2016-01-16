// CURRENTLY NOT USED

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Contacts from '../components/Contacts'
import * as ContactActions from '../actions/contacts'

function mapStateToProps(state) {
  return {
    state: state  // :)
  }
}

function mapDispatchToProps(dispatch) {
  var boundActionCreators = bindActionCreators(ContactActions, dispatch)
  console.log("[App.js] boundActionCreators:", boundActionCreators);
  return boundActionCreators
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
