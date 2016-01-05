import React from 'react'
import {Route, IndexRoute} from 'react-router'

import AppController from './misc/AppController'
import NotFoundController from './misc/NotFoundController'
import HomeController from './misc/HomeController'

export default (
  <Route path='/' component={AppController}>
    <IndexRoute component={HomeController}/>
    <Route path='*' component={NotFoundController}/>
  </Route>
)
