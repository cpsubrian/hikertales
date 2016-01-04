import db from '../lib/db'
import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED,
  AUTH_LOGOUT,
  AUTH_LOGOUT_SUCCESS,
  AUTH_LOGOUT_FAILED
} from '../actions'

export function login (provider) {
  return (dispatch, getState) => {
    dispatch({type: AUTH_LOGIN, provider})
    db.login(provider, (err, data) => {
      if (err) {
        dispatch({type: AUTH_LOGIN_FAILED, provider, err})
      } else {
        dispatch({type: AUTH_LOGIN_SUCCESS, provider, data})
      }
    })
  }
}

export function logout () {
  return (dispatch, getState) => {
    dispatch({type: AUTH_LOGOUT})
    db.logout((err) => {
      if (err) {
        dispatch({type: AUTH_LOGOUT_FAILED})
      } else {
        dispatch({type: AUTH_LOGOUT_SUCCESS})
      }
    })
  }
}
