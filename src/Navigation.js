import React, { Component } from 'react';
import classNames from 'classnames';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

import ActiveNavLink from './ActiveNavLink';
import message from './message';
import siteUrl from './siteUrl';

import myAvatar from './images/me.png';
import './Navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const navbarClasses = classNames('Navigation-navbar', {
      'Navigation-navbar-open-toggle': this.state.isOpen
    });
    return (
      <Navbar className={navbarClasses} expand="md">
        <NavbarBrand className="Navigation-navbar-brand" href="/">
          <img src={myAvatar} className="Navigation-logo" alt="Mike Wright" />
          {message.BARND_TITLE}
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <ActiveNavLink href={siteUrl.ABOUT_ME}>About Me</ActiveNavLink>
            </NavItem>
            <NavItem>
              <ActiveNavLink href={siteUrl.CV}>CV</ActiveNavLink>
            </NavItem>
            <NavItem>
              <ActiveNavLink href={siteUrl.PUBLICATIONS}>
                Publications
              </ActiveNavLink>
            </NavItem>
            <NavItem>
              <ActiveNavLink href={siteUrl.CONTACT}>Contact</ActiveNavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
