import React from 'react'
import {connect} from 'react-redux'
import {
  combineSelectors,
  authSelector,
  currentUserSelector
} from '../../selectors'
import {watchAuth, login, logout} from '../../actions/auth'
import TopBar from '../TopBar'
import Footer from '../Footer'

const selector = combineSelectors(
  authSelector,
  currentUserSelector
)

@connect(selector, {watchAuth, login, logout})
class AppController extends React.Component {

  static propTypes = {
    auth: React.PropTypes.object,
    user: React.PropTypes.object,
    watchAuth: React.PropTypes.func,
    login: React.PropTypes.func,
    logout: React.PropTypes.func,
    children: React.PropTypes.node
  }

  componentDidMount () {
    this.props.watchAuth()
  }

  render () {
    return (
      <div className='app'>
        <TopBar
          auth={this.props.auth}
          user={this.props.user}
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
