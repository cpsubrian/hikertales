import React from 'react'
import autobind from 'autobind-decorator'
import Button from './Button'
import Icon from './Icon'

@autobind
class TopBar extends React.Component {

  static propTypes = {
    auth: React.PropTypes.object,
    user: React.PropTypes.object,
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

  onClickFacebookLogin (e) {
    e.preventDefault()
    this.props.login('facebook')
  }

  render () {
    return (
      <div className='topbar'>
        <div className='brand'>
          <h1>
            <Icon type='hiker'/>
            <strong>Hiker</strong>Tales
          </h1>
        </div>
        {(this.props.auth && this.props.auth.uid) ? (
          <div className='auth'>
            {this.props.user ? (
              <span className='user'>
                <img src={this.props.user.photo}/>
                <strong>{this.props.user.name} | </strong>
              </span>
            ) : null}
            <a href='#' onClick={this.onClickLogout}>
              Sign Out
            </a>
          </div>
        ) : (
          <div className='auth'>
            <Button className='auth--twitter' outline onClick={this.onClickTwitterLogin}>
              <Icon type='twitter'/> Sign in with Twitter
            </Button>
            <Button className='auth--facebook' outline onClick={this.onClickFacebookLogin}>
              <Icon type='facebook'/> Sign in with Facebook
            </Button>
          </div>
        )}
      </div>
    )
  }
}

export default TopBar
