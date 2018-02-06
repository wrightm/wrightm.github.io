import React from 'react';
import classNames from 'classnames';

import { Collapse } from 'reactstrap';

import PaginatedDocument from './PaginatedDocument';

import './Publication.css';

class Publication extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.file = props.file;
    this.state = { collapse: !!props.open };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const caretClass = classNames(
      'fa',
      { 'fa-caret-down': this.state.collapse },
      { 'fa-caret-right': !this.state.collapse }
    );
    return (
      <div style={{ width: '100%' }}>
        <div className="Publication" onClick={this.toggle}>
          {' '}
          <i className={caretClass} aria-hidden={!this.state.collapse} />
          {this.title}
        </div>
        <Collapse isOpen={this.state.collapse}>
          <PaginatedDocument file={this.file} />
        </Collapse>
      </div>
    );
  }
}

export default Publication;
