import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import {syncReduxAndRouter} from 'redux-simple-router'
import {routerSelector} from './selectors'
import store from './store'
import routes from './routes'

// Hook up redux-simple-router with redux store.
syncReduxAndRouter(browserHistory, store, routerSelector)

// Render the App.
ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>
), document.getElementById('root'))
