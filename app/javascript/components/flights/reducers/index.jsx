import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import * as types from '../constants/Types'

// const flights = (state = "", action) => {
//   switch (action.type) {
//     case types.FETCH_FLIGHTS_TO_STORE:
//       return Object.assign({}, state, action.payload)
//     default:
//       return state
//   }
// }

const app = (state = '', action) => {
  switch (action.type) {
    case types.APP_DEMO:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

const config = (state = '', action) => {
  switch (action.type) {
    case types.DEMO:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

export default history =>
  combineReducers({
    router: connectRouter(history),
    app,
    config
  })
