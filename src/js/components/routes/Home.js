import React from 'react'

class HomeController extends React.Component {

  static propTypes = {

  }

  render () {
    return (
      <div className='route--home'>
        <div className='pitch'>
          <h2>Share Your Journey.</h2>
          <h2>Tell Your Tale.</h2>
        </div>
        <div className='browse'>
          <div className='updates'>
            <h3>Recent Updates</h3>
            <ul>
              <li>Update</li>
              <li>Update</li>
              <li>Update</li>
            </ul>
          </div>
          <div className='hikes'>
            <h3>Latest Hikes</h3>
            <ul>
              <li>Hike</li>
              <li>Hike</li>
              <li>Hike</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeController
