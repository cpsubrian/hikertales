import React from 'react'
import {formatPattern} from 'react-router/lib/PatternUtils'
import {Link} from 'react-router'

class PathLink extends React.Component {

  static propTypes = {
    // Create 'to' from 'path' and 'params'.
    path: React.PropTypes.string,
    params: React.PropTypes.object,

    // <Link> Props.
    className: React.PropTypes.string,
    style: React.PropTypes.object,
    activeStyle: React.PropTypes.object,
    activeClassName: React.PropTypes.string,
    to: React.PropTypes.string,
    query: React.PropTypes.object,
    state: React.PropTypes.object,
    onClick: React.PropTypes.func,
    children: React.PropTypes.node
  }

  makeTo () {
    return formatPattern(this.props.path, this.props.params || {})
  }

  render () {
    let to = this.props.to || this.makeTo()
    return (
      <Link
        to={to}
        className={this.props.className}
        style={this.props.style}
        activeStyle={this.props.activeStyle}
        activeClassName={this.props.activeClassName}
        query={this.props.query}
        state={this.props.state}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </Link>
    )
  }
}

export default PathLink
