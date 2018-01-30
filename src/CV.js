import React from 'react';
import { Document, Page } from 'react-pdf/build/entry.webpack';
import {
  Container,
  Row,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';
import { range } from 'lodash';

import message from './message';
import SEO from './SEO';

import './CV.css';

import myCV from './files/mikes-cv.pdf';

class CV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1
    };
    this.onDocumentLoad = this.onDocumentLoad.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.setPage = this.setPage.bind(this);
    this.createPaginationPages = this.createPaginationPages.bind(this);
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  };

  previousPage = event => {
    event.preventDefault();
    const { pageNumber } = this.state;
    if (pageNumber > 1) {
      this.setState({ pageNumber: pageNumber - 1 });
    }
  };

  nextPage = event => {
    event.preventDefault();
    const { pageNumber, numPages } = this.state;
    if (pageNumber < numPages) {
      this.setState({ pageNumber: pageNumber + 1 });
    }
  };

  setPage = pageNumber => event => {
    event.preventDefault();
    this.setState({ pageNumber });
  };

  createPaginationPages = numPages => {
    return range(1, numPages + 1).map(pageNumber => {
      return (
        <PaginationItem key={pageNumber}>
          <PaginationLink onClick={this.setPage(pageNumber)} href="#">
            {pageNumber}
          </PaginationLink>
        </PaginationItem>
      );
    });
  };

  render() {
    const { pageNumber, numPages } = this.state;
    const paginationPages = this.createPaginationPages(numPages);

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
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </Row>
          <Row>
            <Document
              className="CV-pdf"
              file={myCV}
              onLoadSuccess={this.onDocumentLoad}
              loading={message.LOADING_CV}
            >
              <Page
                pageNumber={pageNumber}
                renderAnnotations={false}
                renderTextLayer={false}
              />
            </Document>
          </Row>
          <Row className="d-flex justify-content-center">
            <Pagination className="CV-pagination" size="sm">
              <PaginationItem>
                <PaginationLink previous onClick={this.previousPage} href="#" />
              </PaginationItem>
              {paginationPages}
              <PaginationItem>
                <PaginationLink next onClick={this.nextPage} href="#" />
              </PaginationItem>
            </Pagination>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CV;
