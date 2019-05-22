import React from 'react';

import Header from './../components/Header.jsx';

export default props => (
    <div>
        <Header
            activePath={props.location.pathname}
            headerTitle={props.headerTitle}
            links={props.links}
        />

        <div className="container container--pastNav">{props.children}</div>
    </div>
);
