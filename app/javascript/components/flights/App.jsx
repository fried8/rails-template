import { hot } from 'react-hot-loader/root'
import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import store, { history } from './store/store'

import routers from './Router'

export default hot(
  class Flight extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      return (
        <Provider store={store}>
          <ConnectedRouter history={history}>{routers}</ConnectedRouter>
        </Provider>
      )
    }
  }
)
