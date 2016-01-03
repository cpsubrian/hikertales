import React from 'react'
import {connect} from 'react-redux'

@connect((state) => state)
class HomeController extends React.Component {

  static propTypes = {

  }

  render () {
    return (
      <div className='controller--home'>
        Home
      </div>
    )
  }
}

export default HomeController
