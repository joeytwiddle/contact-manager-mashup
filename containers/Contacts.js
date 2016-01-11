import { connect } from 'react-redux'
import Contacts from '../components/Contacts';

function mapStateToProps(state) {
  return {
    state: state   // :)
  }
}

export default connect(mapStateToProps)(Contacts);
