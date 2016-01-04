import React from 'react'
import {connect} from 'react-redux'
import {selectAuth} from '../../selectors'
import {login, logout} from '../../actions/auth'
import TopBar from '../../components/TopBar'

@connect(selectAuth, {login, logout})
class AppController extends React.Component {

  static propTypes = {
    auth: React.PropTypes.object,
    login: React.PropTypes.func,
    logout: React.PropTypes.func,
    children: React.PropTypes.node
  }

  render () {
    return (
      <div className='controller--app'>
        <TopBar
          auth={this.props.auth}
          login={this.props.login}
          logout={this.props.logout}
        />
        {this.props.children}
      </div>
    )
  }
}

export default AppController
