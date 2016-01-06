import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from '../components/routes/App'
import Home from '../components/routes/Home'
import NotFound from '../components/routes/NotFound'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='*' component={NotFound}/>
  </Route>
)
