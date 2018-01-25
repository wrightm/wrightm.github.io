import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import cernLogo from './images/cern-logo.svg';
import fanduelLogo from './images/fanduel-logo.svg';
import jpmLogo from './images/jpm-logo.svg';
import notBinaryLogo from './images/not-binary-logo.svg';

import './PlacesWorked.css';

const PlacesWorked = props => {
  return (
    <section className="PlacesWorked">
      <Container>
        <Row>
          <Col md="12" className="PlacesWorked-heading">
            <h2>Who I have helped</h2>
            <p className="PlacesWorked-heading-summary">
              I have provided Software Engineering services in the Academia,
              Corporate and Public sectors
            </p>
          </Col>
        </Row>
        <Row>
          <Col md="3" className="active animated fadeInLeft PlacesWorked-job">
            <img
              src={cernLogo}
              width="100%"
              height="100px"
              alt="CERN Logo"
              className="PlacesWorked-logo"
            />
            <p className="PlacesWorked-summary">
              I helped build systems to analyse physics data at the LHC and
              monitoring tools to manage the distribution of data around the
              world.
            </p>
          </Col>
          <Col md="3" className="active animated fadeInLeft PlacesWorked-job">
            <img
              src={fanduelLogo}
              width="100%"
              height="100px"
              alt="Fanduel Logo"
              className="PlacesWorked-logo"
            />
            <p className="PlacesWorked-summary">
              I helped build the backend games engine that millions of people
              played across the USA and contributed to replatforming the backend
              and API.
            </p>
          </Col>
          <Col md="3" className="active animated fadeInRight PlacesWorked-job">
            <img
              src={jpmLogo}
              width="100%"
              height="100px"
              alt="JPM Logo"
              className="PlacesWorked-logo"
            />
            <p className="PlacesWorked-summary">
              I helped build backend and front end systems that allowed internal
              users to analyse party accounts and a service registry to monitor
              and analyse internal systems.
            </p>
          </Col>
          <Col md="3" className="active animated fadeInRight PlacesWorked-job">
            <img
              src={notBinaryLogo}
              width="100%"
              height="100px"
              alt="Not Binary Logo"
              className="PlacesWorked-logo"
            />
            <p className="PlacesWorked-summary">
              Through Not Binary I have helped the Registry of Scotland build
              the next generation land information service{' '}
              <a
                href="https://scotlis.ros.gov.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://scotlis.ros.gov.uk
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PlacesWorked;
