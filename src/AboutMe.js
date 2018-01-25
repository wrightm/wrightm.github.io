import React from 'react';
import Helmet from 'react-helmet';

import Overview from './Overview';
import PlacesWorked from './PlacesWorked';
import Skills from './Skills';

import './AboutMe.css';

const AboutMe = props => {
  return (
    <div>
      <Helmet title="About Me" />
      <Overview />
      <PlacesWorked />
      <Skills />
    </div>
  );
};

export default AboutMe;
