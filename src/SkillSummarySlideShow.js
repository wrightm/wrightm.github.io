import React, { Component } from 'react';
import { Carousel, CarouselItem } from 'reactstrap';

import './SkillSummarySlideShow.css';

const items = [
  {
    id: 1,
    template: () => (
      <h3>
        I <i className="fa fa-heart icon-first" /> Learning
      </h3>
    )
  },
  {
    id: 2,
    template: () => (
      <h3>
        Software Engineer <i className="fa fa-code icon" />
      </h3>
    )
  },
  {
    id: 3,
    template: () => (
      <h3>
        <i className="fa fa-desktop" /> Web Design
      </h3>
    )
  },
  {
    id: 4,
    template: () => (
      <h3>
        <i className="fa fa-trophy" /> PhD In Physics
      </h3>
    )
  }
];

class SkillSummarySlideShow extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const carouselItems = items.map(item => {
      return (
        <CarouselItem
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <div className="item">{item.template()}</div>
        </CarouselItem>
      );
    });
    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        className="SkillSummarySlideShow verticle active animated fadeInDown"
      >
        {carouselItems}
      </Carousel>
    );
  }
}

export default SkillSummarySlideShow;
