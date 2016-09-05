import React from 'react';

import Header from './../components/Header.jsx';

function LayoutContainer(props) {
  return (
    <div>
      <Header
        activePath={props.location.pathname}
        title={props.route.title}
      />

      <div className="container container--pastNav">
        {props.children}
      </div>
    </div>
  );
}

export default LayoutContainer;
