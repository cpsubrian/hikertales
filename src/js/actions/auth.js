import api from '../lib/api'
import {watchUser, unwatchUser} from './user'
import {authSelector} from '../selectors'
import {
  AUTH_WATCH_START,
  AUTH_CHANGED,
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED,
  AUTH_LOGOUT,
  AUTH_LOGOUT_SUCCESS,
  AUTH_LOGOUT_FAILED
} from '../actions'

export function watchAuth () {
  return (dispatch, getState) => {
    dispatch({type: AUTH_WATCH_START})
    api.watchAuth((auth) => {
      dispatch({type: AUTH_CHANGED, auth})
      if (auth && auth.uid) {
        dispatch(watchUser(auth.uid))
        api.checkUser(auth)
      }
    })
  }
}

export function login (provider) {
  return (dispatch, getState) => {
    dispatch({type: AUTH_LOGIN, provider})
    api.login(provider, (err, auth) => {
      if (err) {
        dispatch({type: AUTH_LOGIN_FAILED, provider, err})
      } else {
        dispatch({type: AUTH_LOGIN_SUCCESS, provider, auth})
      }
    })
  }
}

export function logout () {
  return (dispatch, getState) => {
    dispatch(unwatchUser(authSelector(getState()).uid))
    dispatch({type: AUTH_LOGOUT})
    api.logout((err) => {
      if (err) {
        dispatch({type: AUTH_LOGOUT_FAILED})
      } else {
        dispatch({type: AUTH_LOGOUT_SUCCESS})
      }
    })
  }
}
