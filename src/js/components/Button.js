import React from 'react'
import Link from './Link'

class Button extends React.Component {

  static propTypes = {
    to: React.PropTypes.string,
    path: React.PropTypes.string,
    params: React.PropTypes.object,
    onClick: React.PropTypes.func,
    onMouseEnter: React.PropTypes.func,
    onMouseLeave: React.PropTypes.func,
    children: React.PropTypes.node,
    className: React.PropTypes.string,

    // <button> stuff
    type: React.PropTypes.string,
    disabled: React.PropTypes.bool,

    // Button modifiers
    primary: React.PropTypes.bool,
    secondary: React.PropTypes.bool,
    action: React.PropTypes.bool,
    outline: React.PropTypes.bool,
    round: React.PropTypes.bool,
    inverse: React.PropTypes.bool
  }

  getClasses () {
    let classes = ['button']
    let modifiers = ['primary', 'secondary', 'action', 'outline', 'round', 'inverse']
    modifiers.forEach((type) => {
      if (this.props[type]) {
        classes.push('button--' + type)
      }
    })
    if (this.props.className) {
      classes.push(this.props.className)
    }
    return classes.join(' ')
  }

  render () {
    let classes = this.getClasses()
    if (this.props.to || this.props.path) {
      return (
        <Link
          to={this.props.to}
          path={this.props.path}
          params={this.props.params}
          className={classes}
          onMouseEnter={this.props.onMouseEnter}
          onMouseLeave={this.props.onMouseLeave}
        >
          {this.props.children}
        </Link>
      )
    } else {
      return (
        <button
          className={classes}
          type={this.props.type}
          disabled={this.props.disabled}
          onClick={this.props.onClick}
          onMouseEnter={this.props.onMouseEnter}
          onMouseLeave={this.props.onMouseLeave}
        >
          {this.props.children}
        </button>
      )
    }
  }
}

export default Button
