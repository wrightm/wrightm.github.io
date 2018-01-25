import { canUseDOM } from 'exenv';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Brands.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

if (canUseDOM) {
  const $script = require('scriptjs'); // eslint-disable-line global-require
  $script('https://platform.twitter.com/widgets.js', 'twitter-widgets');
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
