import React from 'react';
import { Jumbotron } from 'reactstrap';

import Navigation from './Navigation';
import SocialHeading from './SocialHeading';
import SkillSummarySlideShow from './SkillSummarySlideShow';
import JumbotronLinks from './JumbotronLinks';

import './Header.css';
import './Jumbotron.css';
import myAvatar from './images/me.png';

const Header = props => {
  return (
    <header className="Header">
      <Navigation />
      <Jumbotron className="Jumbotron">
        <img
          src={myAvatar}
          height="200"
          width="200"
          className="Jumbotron-image Jumbotron-image-animated Jumbotron-image-fadeInDown"
          alt="Mike Wright"
        />
        <SocialHeading />
        <SkillSummarySlideShow />
        <JumbotronLinks />
      </Jumbotron>
    </header>
  );
};

export default Header;
