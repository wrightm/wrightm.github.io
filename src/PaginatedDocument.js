import React from 'react';
import { Document, Page } from 'react-pdf/build/entry.webpack';
import classNames from 'classnames';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { range, find } from 'lodash';

import './PaginatedDocument.css';

class PaginatedDocument extends React.Component {
  constructor(props) {
    super(props);
    this.file = props.file;
    this.className = props.className;
    this.loadingMessage = !!props.loading ? props.loading : 'Loading...';
    this.pagedChunks = !!props.pagedChunks ? props.pagedChunks : 5;
    this.state = {
      numPages: null,
      pageNumber: 1,
      pageChunks: []
    };
    this.onDocumentLoad = this.onDocumentLoad.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.setPage = this.setPage.bind(this);
    this.getPaginationPageRange = this.getPaginationPageRange.bind(this);
    this.createPaginationPages = this.createPaginationPages.bind(this);
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({
      numPages,
      pageChunks: range(this.pagedChunks, numPages, this.pagedChunks)
    });
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

  getPaginationPageRange(pageNumber, numPages) {
    const pageChunks = this.state.pageChunks;

    if (pageChunks.length === 0) {
      return {
        start: 0,
        end: 0
      };
    }

    const endPageNumber = find(pageChunks, pageChunk => pageChunk > pageNumber);

    if (endPageNumber) {
      const startPageNumber = endPageNumber - this.pagedChunks;
      return {
        start: startPageNumber + 1,
        end: endPageNumber + 1
      };
    } else {
      const startPageNumber = pageChunks[pageChunks.length - 1];
      return {
        start: startPageNumber,
        end: numPages + 1
      };
    }
  }

  createPaginationPages = (pageNumber, numPages) => {
    const pageRange = this.getPaginationPageRange(pageNumber, numPages);
    return range(pageRange.start, pageRange.end).map(pageNumber => {
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
    const paginationPages = this.createPaginationPages(pageNumber, numPages);
    const documentClass = classNames(
      'PaginatedDocument',
      'justify-content-center',
      { [this.className]: !!this.className }
    );
    return (
      <div>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <Document
          className={documentClass}
          file={this.file}
          onLoadSuccess={this.onDocumentLoad}
          loading={this.loadingMessage}
        >
          <Page
            pageNumber={pageNumber}
            renderAnnotations={false}
            renderTextLayer={false}
          />
        </Document>
        <Pagination className="justify-content-center" size="sm">
          <PaginationItem>
            <PaginationLink previous onClick={this.previousPage} href="#" />
          </PaginationItem>
          {paginationPages}
          <PaginationItem>
            <PaginationLink next onClick={this.nextPage} href="#" />
          </PaginationItem>
        </Pagination>
      </div>
    );
  }
}

export default PaginatedDocument;
