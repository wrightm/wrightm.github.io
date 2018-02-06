import React from 'react';
import { Document, Page } from 'react-pdf/build/entry.webpack';
import classNames from 'classnames';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { range, find } from 'lodash';
import ReactGA from 'react-ga';

import Spinner from './Spinner';
import { CATEGORY, ACTION } from './GAOptions';

import './PaginatedDocument.css';

class PaginatedDocument extends React.Component {
  constructor(props) {
    super(props);
    this.file = props.file;
    this.className = props.className;
    this.pagedChunks = !!props.pagedChunks ? props.pagedChunks : 5;
    this.state = {
      numPages: null,
      pageNumber: 1,
      pageChunks: [],
      isVisible: false
    };
    this.onDocumentLoad = this.onDocumentLoad.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.setPage = this.setPage.bind(this);
    this.getPaginationPageRange = this.getPaginationPageRange.bind(this);
    this.createPaginationPages = this.createPaginationPages.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const eventLabel = `PAGE_${this.state.pageNumber}`;
    ReactGA.event({
      category: CATEGORY.VIEW_DOCUMENT,
      action: ACTION.CLICK,
      label: eventLabel
    });
  }

  onDocumentLoad = ({ numPages }) => {
    this.pagedChunks =
      this.pagedChunks >= numPages ? numPages : this.pagedChunks;
    const pageChunks = range(0, numPages, this.pagedChunks);
    this.setState({
      numPages,
      pageChunks,
      isVisible: true
    });
  };

  previousPage = event => {
    event.preventDefault();
    const { pageNumber } = this.state;
    if (pageNumber > 1) {
      this.setState({ pageNumber: pageNumber - 1 });
    } else {
      this.setState({ pageNumber: 1 });
    }
  };

  nextPage = event => {
    event.preventDefault();
    const { pageNumber, numPages } = this.state;
    if (pageNumber < numPages) {
      this.setState({ pageNumber: pageNumber + 1 });
    } else {
      this.setState({ pageNumber: numPages });
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
        start: startPageNumber ? startPageNumber : 1,
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
        <p className={classNames({ 'd-none': !this.state.isVisible })}>
          Page {pageNumber} of {numPages}
        </p>
        <Document
          className={documentClass}
          file={this.file}
          onLoadSuccess={this.onDocumentLoad}
          loading={<Spinner />}
        >
          <Page
            pageNumber={pageNumber}
            renderAnnotations={false}
            renderTextLayer={false}
          />
        </Document>
        <Pagination
          className={classNames('justify-content-center', {
            'd-none': !this.state.isVisible
          })}
          size="sm"
        >
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
