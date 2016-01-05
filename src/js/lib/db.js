import Firebase from 'firebase'

const db = new Firebase('https://hikertales.firebaseio.com')

class API {

  /* Auth
   ****************************************************************************/
  fetchAuth (cb) {
    try {
      cb(null, db.getAuth())
    } catch (err) {
      cb(err)
    }
  }

  login (provider, cb) {
    if (provider === 'twitter') {
      db.authWithOAuthPopup('twitter', (err, authData) => {
        if (err) return cb(err)
        cb(null, authData)
      })
    } else if (provider === 'facebook') {
      db.authWithOAuthPopup('facebook', (err, authData) => {
        if (err) return cb(err)
        cb(null, authData)
      }, {scope: 'public_profile,email'})
    } else {
      cb(new Error('Not a valid authentication provider'))
    }
  }

  logout (cb) {
    try {
      db.unauth()
      cb()
    } catch (err) {
      cb(err)
    }
  }

  /* Users
   ****************************************************************************/
  fetchUser (uid, cb) {
    console.log('fetch user')
    cb()
  }

  saveUser (user, cb) {
    console.log('save user')
    cb()
  }
}

export default new API()
