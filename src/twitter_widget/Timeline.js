import React from 'react';
import isEqual from 'lodash/isEqual';
import cloneDeep from 'lodash/cloneDeep';
import AbstractWidget from './AbstractWidget';

class Timeline extends React.Component {
  shouldComponentUpdate(nextProps) {
    const changed = name => !isEqual(this.props[name], nextProps[name]);
    return changed('dataSource') || changed('options');
  }

  ready = (tw, element, done) => {
    const { dataSource, options, onLoad } = this.props;

    // Options and dataSource must be cloned since Twitter Widgets modifies it directly
    tw.widgets
      .createTimeline(cloneDeep(dataSource), element, cloneDeep(options))
      .then(() => {
        // Widget is loaded
        if (done) {
          done();
        }
        if (onLoad) {
          onLoad();
        }
      });
  };

  render() {
    return React.createElement(AbstractWidget, { ready: this.ready });
  }
}

export default Timeline;
