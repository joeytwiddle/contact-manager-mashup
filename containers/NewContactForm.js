import { connect } from 'react-redux'
import ContactForm from '../components/ContactForm';

function mapStateToProps(state) {
  return {
    state: state,
    isNew: true
  }
}

export default connect(mapStateToProps)(ContactForm);
