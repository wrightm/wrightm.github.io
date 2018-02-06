import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import siteUrl from './siteUrl';
import withScrollTo from './withScrollTo';
import Layout from './Layout';
import { AboutMe, CV, Publications, Contact, NotFound } from './Routes';
import AnalyticsTracker from './AnalyticsTracker';

import './App.css';
import './Animate.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <AnalyticsTracker />
          <Switch>
            <Route
              exact
              path={siteUrl.HOME}
              component={withScrollTo(AboutMe)}
            />
            <Route
              exact
              path={siteUrl.ABOUT_ME}
              component={withScrollTo(AboutMe)}
            />
            <Route exact path={siteUrl.CV} component={withScrollTo(CV)} />
            <Route
              exact
              path={siteUrl.PUBLICATIONS}
              component={withScrollTo(Publications)}
            />
            <Route
              exact
              path={siteUrl.CONTACT}
              component={withScrollTo(Contact)}
            />
            <Route path="**" component={withScrollTo(NotFound)} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
