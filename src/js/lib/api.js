import Firebase from 'firebase'
import _ from 'lodash'

const db = new Firebase('https://hikertales.firebaseio.com')

class API {

  _watchRefs = {}

  /* Firebase Helpers
   ****************************************************************************/
  read (path, cb) {
    db.child(path).once('value', (snap) => {
      if (snap.exists()) {
        cb(null, snap.val())
      } else {
        cb(null, null)
      }
    }, cb)
  }

  update (path, data, cb) {
    db.child(path).update(data, cb)
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

  checkUser (auth) {
    this.read(`users/${auth.uid}`, (err, user) => {
      if (err) {
        throw err
      }
      if (user) {
        // Update user.
        this.update(`users/${auth.uid}`, _.extend({},
          this.authToUser(auth),
          user,
          {updated: Firebase.ServerValue.TIMESTAMP}
        ))
      } else {
        // Create new user.
        this.update(`users/${auth.uid}`, this.authToUser(auth))
      }
    })
  }

  authToUser (auth) {
    let user = {
      uid: auth.uid,
      provider: auth.provider,
      token: auth.token,
      expires: auth.expires,
      created: Firebase.ServerValue.TIMESTAMP
    }

    if (auth.provider === 'twitter') {
      user = _.extend(user, {
        twitter: auth.twitter,
        username: auth.twitter.username,
        name: auth.twitter.displayName,
        photo: auth.twitter.profileImageURL,
        location: auth.twitter.cachedUserProfile.location
      })
    }

    if (auth.provider === 'facebook') {
      user = _.extend(user, {
        facebook: auth.facebook,
        email: auth.facebook.cachedUserProfile.email,
        username: auth.facebook.email.substr(0, auth.facebook.email.indexOf('@')),
        name: auth.facebook.displayName,
        photo: auth.facebook.profileImageURL
      })
    }

    return user
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
