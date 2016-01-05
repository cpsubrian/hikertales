import db from '../lib/db'
import {
  USER_SAVE,
  USER_SAVE_SUCCESS,
  USER_SAVE_FAILED
} from '../actions'

export function save (user) {
  return (dispatch, getState) => {
    dispatch({type: USER_SAVE, user})
    db.saveUser(user, (err, data) => {
      if (err) {
        dispatch({type: USER_SAVE_FAILED, user, err})
      } else {
        dispatch({type: USER_SAVE_SUCCESS, user, data})
      }
    })
  }
}
