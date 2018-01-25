import React from 'react';
import message from './message';
import serviceUrl from './serviceUrl';

import './SocialHeading.css';

const SocialHeading = () => {
  return (
    <div className="SocialHeading">
      <ul className="SocialHeading-brands hidden-xs animated fadeInLeft">
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
      </ul>
      <h2 className="animated fadeInDown">{message.JUMBOTRON_HEADER}</h2>
      <ul className="SocialHeading-brands hidden-xs animated fadeInRight">
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
    </div>
  );
};

export default SocialHeading;
