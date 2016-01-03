import React from 'react'
import ReactDOM from 'react-dom'
import {ReduxRouter} from 'redux-router'
import {Provider} from 'react-redux'
import routes from './routes/routes'
import store from './store'

ReactDOM.render((
  <Provider store={store}>
    <ReduxRouter>
      {routes}
    </ReduxRouter>
  </Provider>
), document.getElementById('app'))
