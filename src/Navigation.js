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

import TrackedAction from './TrackedAction';
import { CATEGORY, LABEL, ACTION } from './GAOptions';

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
        <TrackedAction
          gaCategory={CATEGORY.NAVIGATION}
          gaAction={ACTION.CLICK}
          gaLabel={LABEL.NAV_BAR_BRAND}
        >
          <NavbarBrand
            className="Navigation-navbar-brand"
            tag={ActiveNavLink}
            active={true}
            href={siteUrl.ABOUT_ME}
          >
            <img src={myAvatar} className="Navigation-logo" alt="Mike Wright" />
            {message.BARND_TITLE}
          </NavbarBrand>
        </TrackedAction>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <TrackedAction
                gaCategory={CATEGORY.NAVIGATION}
                gaAction={ACTION.CLICK}
                gaLabel={LABEL.NAV_BAR_ABOUT_ME}
                href={siteUrl.ABOUT_ME}
                tag={ActiveNavLink}
              >
                About Me
              </TrackedAction>
            </NavItem>
            <NavItem>
              <TrackedAction
                gaCategory={CATEGORY.NAVIGATION}
                gaAction={ACTION.CLICK}
                gaLabel={LABEL.NAV_BAR_ABOUT_CV}
                href={siteUrl.CV}
                tag={ActiveNavLink}
              >
                CV
              </TrackedAction>
            </NavItem>
            <NavItem>
              <TrackedAction
                gaCategory={CATEGORY.NAVIGATION}
                gaAction={ACTION.CLICK}
                gaLabel={LABEL.NAV_BAR_PUBLICATIONS}
                href={siteUrl.PUBLICATIONS}
                tag={ActiveNavLink}
              >
                Publications
              </TrackedAction>
            </NavItem>
            <NavItem>
              <TrackedAction
                gaCategory={CATEGORY.NAVIGATION}
                gaAction={ACTION.CLICK}
                gaLabel={LABEL.NAV_BAR_CONTACT}
                href={siteUrl.CONTACT}
                tag={ActiveNavLink}
              >
                Contact
              </TrackedAction>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
