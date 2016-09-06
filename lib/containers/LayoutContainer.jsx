import React from 'react';

import Header from './../components/Header.jsx';

function LayoutContainer(props) {
  const routes = props.routes[0];
  const links = [
    {
      title: routes.indexRoute.title,
      path: routes.path,
    },
    {
      title: routes.childRoutes[0].title,
      path: routes.childRoutes[0].path,
    },
  ];

  return (
    <div>
      <Header
        activePath={props.location.pathname}
        headerTitle={props.route.headerTitle}
        links={links}
      />

      <div className="container container--pastNav">
        {props.children}
      </div>
    </div>
  );
}

export default LayoutContainer;
