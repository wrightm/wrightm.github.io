import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import siteUrl from './siteUrl';

import Layout from './Layout';
import { AboutMe, CV, Publications, Contact, NotFound } from './Routes';

import './App.css';
import './Animate.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path={siteUrl.HOME} component={AboutMe} />
            <Route exact path={siteUrl.ABOUT_ME} component={AboutMe} />
            <Route exact path={siteUrl.CV} component={CV} />
            <Route exact path={siteUrl.PUBLICATIONS} component={Publications} />
            <Route exact path={siteUrl.CONTACT} component={Contact} />
            <Route path="**" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
