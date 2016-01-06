import Firebase from 'firebase'

const db = new Firebase('https://hikertales.firebaseio.com')

class API {

  _watchRefs = {}

  /* Firebase Helpers
   ****************************************************************************/
  read (path, cb) {
    db.child(path).once('value', (snap) => {
      if (snap.exists()) {
        cb(null, null)
      } else {
        cb(null, snap.val())
      }
    }, cb)
  }

  watch (path, cb) {
    if (typeof this._watchRefs[path] === 'undefined') {
      this._watchRefs[path] = db.child(path)
      this._watchRefs[path].on('value', (snap) => {
        cb(null, snap.val())
      }, cb)
    } else {
      cb(new Error(`Already watching ${path}`))
    }
  }

  unwatch (path, cb) {
    if (typeof this._watchRefs[path] !== 'undefined') {
      this._watchRefs[path].off('value')
      cb()
    } else {
      cb(new Error(`Not watching ${path}`))
    }
  }

  /* Auth
   ****************************************************************************/
  fetchAuth (cb) {
    try {
      cb(null, db.getAuth())
    } catch (err) {
      cb(err)
    }
  }

  watchAuth (cb) {
    db.onAuth(cb)
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
    this.read(`users/${uid}`, cb)
  }

  watchUser (uid, cb) {
    this.watch(`users/${uid}`, cb)
  }

  unwatchUser (uid, cb) {
    this.unwatch(`users/${uid}`, cb)
  }
}

export default new API()
