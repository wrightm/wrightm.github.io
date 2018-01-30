import React from 'react';

import SEO from './SEO';
import Header from './Header';
import Footer from './Footer';

const Layout = props => {
  return (
    <div className="wrapper">
      <SEO
        schema="Person"
        title="Home Page to Personal Site"
        description="Michael Wright: Learn who I am and what I do"
        contentType="website"
        image="about-me"
      />
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
