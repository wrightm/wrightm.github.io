import React from 'react';

import { Link } from 'react-router-dom';

import siteUrl from './siteUrl';
import TrackedAction from './TrackedAction';
import { CATEGORY, LABEL, ACTION } from './GAOptions';

import './JumbotronLinks.css';

const JumbotronLinks = props => {
  return (
    <div className="JumbotronLinks">
      <ul>
        <li>
          <TrackedAction
            gaCategory={CATEGORY.NAVIGATION}
            gaAction={ACTION.CLICK}
            gaLabel={LABEL.JUMBOTRON_GET_TO_NO_ME}
            tag={Link}
            to={siteUrl.ABOUT_ME}
            className="JumbotronLinks-btn JumbotronLinks-btn-left btn-lg active animated fadeInLeft"
            role="button"
          >
            <i className="fa fa-smile-o" /> Get to know me
          </TrackedAction>
        </li>
        <li>
          <TrackedAction
            gaCategory={CATEGORY.NAVIGATION}
            gaAction={ACTION.CLICK}
            gaLabel={LABEL.JUMBOTRON_HIRE_ME}
            tag={Link}
            to={siteUrl.CONTACT}
            className="JumbotronLinks-btn JumbotronLinks-btn-right btn-lg active animated fadeInRight"
            role="button"
          >
            <i className="fa fa-bolt" /> Hire me
          </TrackedAction>
        </li>
      </ul>
    </div>
  );
};

export default JumbotronLinks;
