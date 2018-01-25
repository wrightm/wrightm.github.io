import React, { Component } from 'react';
import { NavLink } from 'reactstrap';

import { Route, Link } from 'react-router-dom';

import './ActiveNavLink.css';

class ActiveNavLink extends Component {
  constructor(props) {
    super(props);
    this.href = props.href;
    this.children = props.children;
    this.active = props.active;

    // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
    this.escapedPath = props.href.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
  }

  componentWillReceiveProps(nextProps) {
    this.active = nextProps.active;
  }

  render() {
    return (
      <Route
        path={this.escapedPath}
        children={({ location, match }) => {
          return (
            <NavLink
              tag={Link}
              to={this.href}
              children={this.children}
              className="ActiveNavLink"
              active={!!match}
            />
          );
        }}
      />
    );
  }
}

export default ActiveNavLink;
