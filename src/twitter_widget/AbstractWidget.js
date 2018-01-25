import React from 'react';

class AbstractWidget extends React.Component {
  static removeChildren(node) {
    if (node) {
      while (node.firstChild) {
        node.removeChild(node.firstChild);
      }
    }
  }

  static removeChildrenExceptLast(node) {
    if (node) {
      while (node.childNodes.length > 1) {
        node.removeChild(node.firstChild);
      }
    }
  }

  componentWillMount() {
    this.willUnmount = false;
  }

  componentDidMount() {
    this.loadWidget();
  }

  componentDidUpdate() {
    this.loadWidget();
  }

  componentWillUnmount() {
    this.willUnmount = true;
  }

  loadWidget = () => {
    const $script = require('scriptjs'); // eslint-disable-line global-require

    $script.ready('twitter-widgets', () => {
      if (!window.twttr) {
        // If the script tag fails to load, scriptjs.ready() will still trigger.
        // Let's avoid the JS exceptions when that happens.
        console.error('Failure to load window.twttr, aborting load.'); // eslint-disable-line no-console
        return;
      }

      // Delete existing
      AbstractWidget.removeChildren(this.widgetWrapper);

      // Create widget
      this.props.ready(window.twttr, this.widgetWrapper, this.done);
    });
  };

  done = () => {
    if (this.willUnmount) {
      AbstractWidget.removeChildrenExceptLast(this.widgetWrapper);
    }
  };

  render() {
    return React.createElement('div', {
      ref: c => {
        this.widgetWrapper = c;
      }
    });
  }
}

export default AbstractWidget;
