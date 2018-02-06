import React from 'react';

import message from './message';
import serviceUrl from './serviceUrl';
import TrackedAction from './TrackedAction';
import { CATEGORY, LABEL, ACTION } from './GAOptions';

import './SocialHeading.css';

const SocialHeading = () => {
  return (
    <div className="SocialHeading">
      <ul className="SocialHeading-brands hidden-xs animated fadeInLeft">
        <li>
          <TrackedAction
            gaCategory={CATEGORY.NAVIGATION}
            gaAction={ACTION.CLICK}
            gaLabel={LABEL.SOCIAL_HEADING_GITHUB}
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
            gaLabel={LABEL.SOCIAL_HEADING_TWITTER}
            tag="a"
            href={serviceUrl.TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter" />
          </TrackedAction>
        </li>
      </ul>
      <h2 className="animated fadeInDown">{message.JUMBOTRON_HEADER}</h2>
      <ul className="SocialHeading-brands hidden-xs animated fadeInRight">
        <li>
          <TrackedAction
            gaCategory={CATEGORY.NAVIGATION}
            gaAction={ACTION.CLICK}
            gaLabel={LABEL.SOCIAL_HEADING_GOOGLEPLUS}
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
            gaLabel={LABEL.SOCIAL_HEADING_LINKEDIN}
            tag="a"
            href={serviceUrl.LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin" />
          </TrackedAction>
        </li>
      </ul>
    </div>
  );
};

export default SocialHeading;
