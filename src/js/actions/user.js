import api from '../lib/api'
import {
  USER_WATCH_START,
  USER_WATCH_ERROR,
  USER_WATCH_STOP,
  USER_CHANGED,
  USER_SAVE,
  USER_SAVE_SUCCESS,
  USER_SAVE_FAILED
} from '../actions'

export function watchUser (uid) {
  return (dispatch, getState) => {
    dispatch({type: USER_WATCH_START, uid})
    api.watchUser(uid, (err, user) => {
      if (err) {
        dispatch({type: USER_WATCH_ERROR, err})
      } else {
        dispatch({type: USER_CHANGED, user})
      }
    })
  }
}

export function unwatchUser (uid) {
  return (dispatch, getState) => {
    dispatch({type: USER_WATCH_STOP, uid})
    api.unwatchUser(uid, (err) => {
      if (err) {
        dispatch({type: USER_WATCH_ERROR, err})
      }
    })
  }
}

export function saveUser (user) {
  return (dispatch, getState) => {
    dispatch({type: USER_SAVE, user})
    api.saveUser(user, (err, user) => {
      if (err) {
        dispatch({type: USER_SAVE_FAILED, user, err})
      } else {
        dispatch({type: USER_SAVE_SUCCESS, user})
      }
    })
  }
}
