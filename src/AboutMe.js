import React from 'react';
import SEO from './SEO';
import Overview from './Overview';
import PlacesWorked from './PlacesWorked';
import Skills from './Skills';

import './AboutMe.css';

const AboutMe = props => {
  return (
    <div>
      <SEO
        schema="AboutPage"
        title="About Me"
        description="An overview of Michael Wright. Find out what he has done and who he has worked with."
        contentType="website"
        image="about-me"
      />
      <Overview />
      <PlacesWorked />
      <Skills />
    </div>
  );
};

export default AboutMe;
