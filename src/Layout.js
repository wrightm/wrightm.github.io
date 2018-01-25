import React from 'react';
import Helmet from 'react-helmet';

import Header from './Header';
import Footer from './Footer';

const Layout = props => {
  return (
    <div className="wrapper">
      <Helmet
        titleTemplate="Michael Wright - %s"
        title="Home"
        defaultTitle="Personal Site"
        meta={[
          {
            name: 'description',
            content: 'Michael Wright: Learn who I am and what I do.'
          },
          { property: 'og:type', content: 'article' },
          { name: 'author', content: 'Michael Wright' },
          {
            name: 'keywords',
            content:
              'Software Engineer, Web Design, Development, Java, Javascript'
          }
        ]}
      />
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
