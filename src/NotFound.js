import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import siteUrl from './siteUrl';

const NotFound = props => {
  return (
    <div>
      <Helmet title="404 Page Not Found" />
      <section className="jumbotron text-center mb-3">
        <Container>
          <Row>
            <Col>
              <h1 className="jumbotron-heading display-4">404 - Not Found</h1>
              <p className="lead">
                Can't find what you're looking for?{' '}
                <Link to={siteUrl.CONTACT}>Contact Me</Link>.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default NotFound;
