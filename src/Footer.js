import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import siteUrl from './siteUrl';
import serviceUrl from './serviceUrl';
import message from './message';
import TrackedAction from './TrackedAction';
import { CATEGORY, LABEL, ACTION } from './GAOptions';

import './Footer.css';
import './Animate.css';

const Footer = props => {
  return (
    <div className="Footer">
      <Container>
        <Row>
          <Col className="text-center animated fadeInDown">
            <ul className="brands brands-inline">
              <li>
                <TrackedAction
                  gaCategory={CATEGORY.NAVIGATION}
                  gaAction={ACTION.CLICK}
                  gaLabel={LABEL.FOOTER_GITHUB}
                  tag="a"
                  href={serviceUrl.GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github" />
                </TrackedAction>
              </li>
              <li>
                <TrackedAction
                  gaCategory={CATEGORY.NAVIGATION}
                  gaAction={ACTION.CLICK}
                  gaLabel={LABEL.FOOTER_TWITTER}
                  tag="a"
                  href={serviceUrl.TWITTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter" />
                </TrackedAction>
              </li>
              <li>
                <TrackedAction
                  gaCategory={CATEGORY.NAVIGATION}
                  gaAction={ACTION.CLICK}
                  gaLabel={LABEL.FOOTER_GOOGLEPLUS}
                  tag="a"
                  href={serviceUrl.GOOGLE_PLUS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-google-plus" />
                </TrackedAction>
              </li>
              <li>
                <TrackedAction
                  gaCategory={CATEGORY.NAVIGATION}
                  gaAction={ACTION.CLICK}
                  gaLabel={LABEL.FOOTER_LINKEDIN}
                  tag="a"
                  href={serviceUrl.LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin" />
                </TrackedAction>
              </li>
            </ul>

            <p>
              © Michael Wright 2018 All right reserved. Designed by{' '}
              <TrackedAction
                gaCategory={CATEGORY.NAVIGATION}
                gaAction={ACTION.CLICK}
                gaLabel={LABEL.FOOTER_COPYWRITE_BUTTON}
                tag="span"
              >
                <Button
                  tag={Link}
                  to={siteUrl.ABOUT_ME}
                  className="Footer-btn-footer"
                >
                  {message.BARND_TITLE}
                </Button>
              </TrackedAction>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
