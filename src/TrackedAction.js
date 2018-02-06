import React, { Component } from 'react';

import ReactGA from 'react-ga';

export default class TrackedAction extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.category = props.gaCategory;
    this.action = props.gaAction;
    this.label = props.gaLabel;
    this.value = props.gaValue;
    this.nonInteraction = !!props.gaNonInteraction;
    this.onClick = props.onClick;
    this.tag = props.tag;
    this.trackAction = this.trackAction.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  trackAction = () => {
    if (this.category && this.label) {
      ReactGA.event({
        category: this.category,
        action: this.action,
        label: this.label,
        nonInteraction: this.nonInteraction
      });
    }
  };

  handleClick = event => {
    this.trackAction();

    if (this.onClick) {
      this.onClick(event);
    }
  };

  render() {
    let {
      gaCategory,
      gaAction,
      gaLabel,
      gaValue,
      gaNonInteraction,
      onClick,
      tag,
      ...attributes
    } = this.props;

    const Tag = this.tag ? this.tag : 'div';
    return <Tag {...attributes} onClick={this.handleClick} />;
  }
}
