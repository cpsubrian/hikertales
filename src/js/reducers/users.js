import {
  USER_CHANGED
} from '../actions'

const initialState = {}

// @todo Replace this with actual Immutable merges and whatnot.
const reducers = {

  [USER_CHANGED]: (state, {user}) => {
    return {...state, ...{[user.uid]: user}}
  }
}

export default function (state = initialState, action) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  }
  return state
}
