import React, { Component } from 'react';

export default function withScrollTo(WrappedComponent) {
  const HOC = class extends Component {
    componentDidMount() {
      if (this.node) {
        this.node.scrollIntoView();
      }
    }

    render() {
      return (
        <div ref={node => (this.node = node)}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };

  return HOC;
}
