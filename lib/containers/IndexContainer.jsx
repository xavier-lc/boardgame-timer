import React from 'react';
import TotalTimerContainer from 'containers/TotalTimerContainer';
import PlayerTimersContainer from 'containers/PlayerTimersContainer';

/**
 * Group together the home page containers so they are provided as one component to the IndexRoute
 *
 * @returns {ReactElement}
 */
function IndexContainer() {
    return (
        <div>
            <TotalTimerContainer />
            <PlayerTimersContainer />
        </div>
    );
}

export default IndexContainer;
