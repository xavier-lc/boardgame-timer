import React from 'react';

import Header from './../components/Header.jsx';

export default props => (
    <div>
        <Header
            activePath={props.activePath}
            headerTitle={props.headerTitle}
            links={props.links}
        />

        <div className="container container--pastNav">{props.children}</div>
    </div>
);
