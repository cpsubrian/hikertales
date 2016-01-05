import React from 'react'
import autobind from 'autobind-decorator'
import Button from './Button'
import Icon from './Icon'

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
          <h1><strong>Hiker</strong>Tales</h1>
        </div>
        <div className='auth'>
          {(this.props.auth && this.props.auth.uid) ? (
            <a href='#' onClick={this.onClickLogout}>
              Sign Out
            </a>
          ) : (
            <Button className='auth--twitter' outline onClick={this.onClickTwitterLogin}>
              <Icon type='twitter'/> Sign in with Twitter
            </Button>
          )}
        </div>
      </div>
    )
  }
}

export default TopBar
