import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/index'

class PageIndex extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return <div></div>
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(
  mapStateToProps,
  actions
)(PageIndex)
