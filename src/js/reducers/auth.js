import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAIL,
  AUTH_LOGOUT,
  AUTH_LOGOUT_SUCCESS,
  AUTH_LOGOUT_FAILED
} from '../actions'

const initialState = {}

// @todo Replace this with actual Immutable merges and whatnot.
const reducers = {

  [AUTH_LOGIN]: (state, {provider}) => {
    return {provider}
  },

  [AUTH_LOGIN_SUCCESS]: (state, {provider, data}) => {
    return data
  },

  [AUTH_LOGIN_FAIL]: (state, {provider, err}) => {
    return {err}
  },

  [AUTH_LOGOUT]: (state) => {
    return state
  },

  [AUTH_LOGOUT_SUCCESS]: (state) => {
    return initialState
  },

  [AUTH_LOGOUT_FAILED]: (state, {err}) => {
    return {err}
  }
}

export default function (state = initialState, action) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  }
  return state
}
