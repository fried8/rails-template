import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import rootReducer from '../reducers/index'

import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

const defaultState = {
  app: {},

  config: {}
}

export const history = createBrowserHistory()

const middlewares = []
const loggerMiddleware = createLogger()

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

middlewares.push(thunkMiddleware)
middlewares.push(routerMiddleware(history))

if (process.env.NODE_ENV === `development`) {
  middlewares.push(loggerMiddleware)
}

const enhancer = composeEnhancers(applyMiddleware(...middlewares))

const store = createStore(rootReducer(history), defaultState, enhancer)

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('../reducers', () =>
    store.replaceReducer(rootReducer(history))
  )
}

export default store
