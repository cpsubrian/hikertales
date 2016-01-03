import React from 'react'
import {connect} from 'react-redux'

@connect((state) => state)
class AppController extends React.Component {

  static propTypes = {
    children: React.PropTypes.node
  }

  render () {
    return (
      <div className='controller--app'>
        {this.props.children}
      </div>
    )
  }
}

export default AppController
