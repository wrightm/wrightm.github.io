import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import siteUrl from './siteUrl';
import serviceUrl from './serviceUrl';
import message from './message';

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
                <a
                  href={serviceUrl.GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github" />
                </a>
              </li>
              <li>
                <a
                  href={serviceUrl.TWITTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a
                  href={serviceUrl.GOOGLE_PLUS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-google-plus" />
                </a>
              </li>
              <li>
                <a
                  href={serviceUrl.LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>

            <p>
              © Michael Wright 2018 All right reserved. Designed by{' '}
              <Button
                tag={Link}
                to={siteUrl.ABOUT_ME}
                className="Footer-btn-footer"
              >
                {message.BARND_TITLE}
              </Button>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
