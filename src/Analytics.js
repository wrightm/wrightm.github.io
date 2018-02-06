import React from 'react';

import ReactGA from 'react-ga';

class Analytics extends React.Component {
  componentDidMount() {
    this.sendPageChange(
      this.props.location.pathname,
      this.props.location.search
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.location.pathname !== this.props.location.pathname ||
      nextProps.location.search !== this.props.location.search
    );
  }

  componentDidUpdate() {
    this.sendPageChange(
      this.props.location.pathname,
      this.props.location.search
    );
  }

  sendPageChange(pathname, search) {
    const page = pathname + search;
    ReactGA.set({ page });
    ReactGA.pageview(page);
  }

  render() {
    return null;
  }
}

export default Analytics;
