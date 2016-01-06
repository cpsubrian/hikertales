import {
  AUTH_CHANGED
} from '../actions'

const initialState = {}

// @todo Replace this with actual Immutable merges and whatnot.
const reducers = {

  [AUTH_CHANGED]: (state, {auth}) => {
    if (auth) {
      return auth
    } else {
      return initialState
    }
  }
}

export default function (state = initialState, action) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  }
  return state
}
