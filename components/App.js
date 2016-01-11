import React, { Component, PropTypes } from 'react'
import { pushPath } from 'redux-simple-router'

class App extends Component {
  render() {
    let { showComponent, dispatch } = this.props
    return (
      <div>
        {showComponent || <div>No Component To Show</div>}
      </div>
    )
  }
}

// TODO
App.propTypes = {
}

export default App
