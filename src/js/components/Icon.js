import React from 'react'

class Icon extends React.Component {

  static propTypes = {
    type: React.PropTypes.string,
    className: React.PropTypes.string,
    onClick: React.PropTypes.func
  }

  render () {
    return (
      <i
        className={'icon fa fa-' + this.props.type + ' ' + (this.props.className || '')}
        onClick={this.props.onClick}
      ></i>
    )
  }
}

export default Icon
