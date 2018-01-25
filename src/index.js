import { canUseDOM } from 'exenv';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';
import './Brands.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { loadComponents } from 'loadable-components';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

if (canUseDOM) {
  const $script = require('scriptjs'); // eslint-disable-line global-require
  $script('https://platform.twitter.com/widgets.js', 'twitter-widgets');
}

loadComponents().then(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
  registerServiceWorker();
});
