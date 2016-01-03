import {createStore, applyMiddleware, compose} from 'redux'
import {reduxReactRouter} from 'redux-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import {before, after} from './middleware'
import reducers from './reducers'

const initialState = {}

const store = compose(
  applyMiddleware.apply(null, before),
  reduxReactRouter({createHistory: createBrowserHistory}),
  applyMiddleware.apply(null, after),
)(createStore)(reducers, initialState)

// Enable Webpack hot module replacement for middleware and reducers.
if (module.hot) {
  module.hot.accept('./middleware', () => {
    const nextRootReducer = require('./middleware')
    store.replaceReducer(nextRootReducer)
  })
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers')
    store.replaceReducer(nextRootReducer)
  })
}

export default store
