import React from 'react'
import autobind from 'autobind-decorator'

@autobind
class TopBar extends React.Component {

  static propTypes = {
    auth: React.PropTypes.object,
    login: React.PropTypes.func,
    logout: React.PropTypes.func
  }

  onClickLogout (e) {
    e.preventDefault()
    this.props.logout()
  }

  onClickTwitterLogin (e) {
    e.preventDefault()
    this.props.login('twitter')
  }

  render () {
    return (
      <div className='topbar'>
        <div className='brand'>
          <h1>HikerTales</h1>
        </div>
        <div className='auth'>
          {(this.props.auth && this.props.auth.uid) ? (
            <a href='#' onClick={this.onClickLogout}>
              Logout
            </a>
          ) : (
            <a href='#' onClick={this.onClickTwitterLogin}>
              <img src='/images/twitter-login.png'/>
            </a>
          )}
        </div>
      </div>
    )
  }
}

export default TopBar
