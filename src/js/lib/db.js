import Firebase from 'firebase'

const db = new Firebase('https://hikertales.firebaseio.com')
const api = {}

/* Auth
 ******************************************************************************/

// Fetch current auth state.
api.fetchAuth = function (cb) {
  try {
    cb(null, db.getAuth())
  } catch (err) {
    cb(err)
  }
}

// Login
api.login = function (provider, cb) {
  if (provider === 'twitter') {
    db.authWithOAuthPopup('twitter', function (err, authData) {
      if (err) return cb(err)
      cb(null, authData)
    })
  } else {
    cb(new Error('Not a valid authentication provider'))
  }
}

// Logout
api.logout = function (cb) {
  try {
    db.unauth()
    cb()
  } catch (err) {
    cb(err)
  }
}

export default api
