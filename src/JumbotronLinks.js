import React from 'react';

import { Link } from 'react-router-dom';
import siteUrl from './siteUrl';

import './JumbotronLinks.css';

const JumbotronLinks = props => {
  return (
    <div className="JumbotronLinks">
      <ul>
        <li>
          <Link
            to={siteUrl.ABOUT_ME}
            className="JumbotronLinks-btn JumbotronLinks-btn-left btn-lg active animated fadeInLeft"
            role="button"
          >
            <i className="fa fa-smile-o" /> Get to know me
          </Link>
        </li>
        <li>
          <Link
            to={siteUrl.CONTACT}
            className="JumbotronLinks-btn JumbotronLinks-btn-right btn-lg active animated fadeInRight"
            role="button"
          >
            <i className="fa fa-bolt" /> Hire me
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default JumbotronLinks;
