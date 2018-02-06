import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';
import './Brands.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { loadComponents } from 'loadable-components';
import { canUseDOM } from 'exenv';
import ReactGA from 'react-ga';

import registerServiceWorker from './registerServiceWorker';

import App from './App';

const isDev = process.env.NODE_ENV !== 'production';

ReactGA.initialize('UA-113351097-1', {
  debug: isDev,
  testMode: isDev
});

if (canUseDOM) {
  const $script = require('scriptjs'); // eslint-disable-line global-require
  $script('https://platform.twitter.com/widgets.js', 'twitter-widgets');
}

loadComponents().then(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
  registerServiceWorker();
});
