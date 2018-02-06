import React from 'react';
import { Container, Row } from 'reactstrap';

import SEO from './SEO';

import './CV.css';

import myCV from './files/mikes-cv.pdf';
import PaginatedDocument from './PaginatedDocument';

export default class CV extends React.Component {
  render() {
    return (
      <div className="CV">
        <SEO
          schema="Article"
          title="CV"
          description="Michael Wright's Curriculum Vitae. Contact Michael Wright if you would like to work with him."
          contentType="website"
          image="cv"
        />
        <Container>
          <h2>Curriculum Vitae</h2>
          <hr className="CV-underline" />
          <Row className="d-flex justify-content-center">
            <PaginatedDocument file={myCV} />
          </Row>
        </Container>
      </div>
    );
  }
}
