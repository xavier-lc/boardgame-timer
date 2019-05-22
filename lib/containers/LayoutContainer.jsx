import React from 'react';
import { pause } from 'state/actions';
import Header from 'components/Header';
import store from 'state/index';

export default class LayoutContainer extends React.Component {
    componentDidUpdate(prevProps) {
        const locationChanged = this.props.location !== prevProps.location;

        if (!locationChanged) {
            return;
        }

        const state = store.getState();

        // whenever the user navigates out of the home page (where the timer is),
        // pause the stopwatch if it's running
        if (this.props.location.pathname !== '/' && state.stopwatch.isOn) {
            store.dispatch(pause());
        }

        if (process.env.NODE_ENV === 'production') {
            ga('set', 'page', location.pathname);
            ga('send', 'pageview');
        }
    }

    render() {
        return (
            <div>
                <Header
                    activePath={this.props.location.pathname}
                    headerTitle={this.props.headerTitle}
                    links={this.props.links}
                />

                <div className="container container--pastNav">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
