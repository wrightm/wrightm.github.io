import React from 'react';

import TimeLine from './twitter_widget/Timeline';

class Tweets extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  getTimelineHeight() {
    const currentWidth = this.state.width;

    if (currentWidth === 0 || currentWidth > 768) {
      return 700;
    } else {
      return 500;
    }
  }

  render() {
    const timeLineHeight = this.getTimelineHeight();
    return (
      <TimeLine
        dataSource={{
          sourceType: 'profile',
          screenName: 'wright1michael1'
        }}
        options={{
          username: 'wright1michael1',
          height: timeLineHeight
        }}
      />
    );
  }
}

export default Tweets;
