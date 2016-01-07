import {combineReducers} from 'redux'
import {routeReducer as router} from 'redux-simple-router'
import auth from './auth'
import users from './users'

const reducers = {
  router,
  auth,
  users
}
const combined = combineReducers(reducers)

// Allows 'global' state outside of our keyed reducers.
export default function (state, action) {
  let partialState = Object.keys(reducers).reduce((memo, key) => {
    memo[key] = state[key]
    return memo
  }, {})
  let combinedState = combined(partialState, action)
  return {...state, ...combinedState}
}
