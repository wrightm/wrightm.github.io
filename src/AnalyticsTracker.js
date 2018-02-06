import React from 'react';
import { Route } from 'react-router-dom';

import Analytics from './Analytics';

const AnalyticsTracker = () => {
  return <Route component={Analytics} />;
};

export default AnalyticsTracker;
