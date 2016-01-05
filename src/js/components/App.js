import React from 'react'
import {connect} from 'react-redux'
import {authSelector} from '../selectors'
import {login, logout} from '../actions/auth'
import TopBar from './TopBar'
import Footer from './Footer'

@connect(authSelector, {login, logout})
class AppController extends React.Component {

  static propTypes = {
    auth: React.PropTypes.object,
    login: React.PropTypes.func,
    logout: React.PropTypes.func,
    children: React.PropTypes.node
  }

  render () {
    return (
      <div className='app'>
        <TopBar
          auth={this.props.auth}
          login={this.props.login}
          logout={this.props.logout}
        />
        {this.props.children}
        <Footer auth={this.props.auth}/>
      </div>
    )
  }
}

export default AppController
