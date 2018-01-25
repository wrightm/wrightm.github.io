import React from 'react';
import loadable from 'loadable-components';

const defaultScreens = {
  LoadingComponent: props => <div>Loading...</div>,
  ErrorComponent: ({ error, props }) => <div>Oups an error occurs.</div>
};

export const AboutMe = loadable(() => import('./AboutMe'), defaultScreens);
export const CV = loadable(() => import('./CV'), defaultScreens);
export const Publications = loadable(
  () => import('./Publications'),
  defaultScreens
);
export const Contact = loadable(() => import('./Contact'), defaultScreens);
export const NotFound = loadable(() => import('./NotFound'), defaultScreens);
