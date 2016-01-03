import {combineReducers} from 'redux'
import router from './router'

const reducers = {
  router
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
