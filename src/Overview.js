import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'reactstrap';

import siteUrl from './siteUrl';

import TimeLine from './TimeLine';
import Tweets from './Tweets';

import myAvatar from './images/me.png';
import './Overview.css';

const Overview = props => {
  return (
    <section className="Overview">
      <Container>
        <Row>
          <Col sm="2" className="active animated fadeInLeft d-none d-sm-block">
            <img src={myAvatar} className="Overview-img" alt="Mike Wright" />
          </Col>
          <Col sm="6" md="7" className="active animated fadeInLeft">
            <h3 className="Overview-header">Michael Wright</h3>
            <p className="Overview-summary">
              A logical forward thinking software engineer with a high aptitude
              for problem solving and getting stuff done. I have a wealth of
              experience from building services to analyse large convoluted
              datasets at CERN to helping build one of Scotland's most
              successful start ups. I enjoy building and designing websites from
              the ground up or improving existing code bases. If your looking
              for a contract Software Engineer or needing a bespoke website
              built <Link to={siteUrl.CONTACT}>get in touch</Link>.
            </p>
            <Tweets />
          </Col>
          <Col sm="2" md="2" className="active animated fadeInRight">
            <TimeLine />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Overview;
