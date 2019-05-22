import React from 'react';
import ReactDOM from 'react-dom';
import Route from 'react-router-dom/Route';
import HashRouter from 'react-router-dom/HashRouter';
import Provider from 'react-redux/lib/components/Provider';
import store from 'state/index';
import LayoutContainerWithRouter from 'containers/LayoutContainerWithRouter';
import mapToLinkObj from 'utils/mapToLinkObj';
import ConfigContainer from 'containers/ConfigContainer';
import IndexContainer from 'containers/IndexContainer';

if (process.env.NODE_ENV === 'production') {
    ga('create', 'UA-83961876-1', 'auto');
}

const links = [
    ['/', 'Timer', IndexContainer],
    ['/config', 'Config', ConfigContainer]
].map(mapToLinkObj);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <LayoutContainerWithRouter
                headerTitle="Boardgame timer"
                links={links}
            >
                <Route
                    exact
                    path="/"
                    component={IndexContainer}
                    title="Timer"
                />

                <Route
                    path="/config"
                    component={ConfigContainer}
                    title="Config"
                />
            </LayoutContainerWithRouter>
        </HashRouter>
    </Provider>,
    document.getElementById('js-app')
);
