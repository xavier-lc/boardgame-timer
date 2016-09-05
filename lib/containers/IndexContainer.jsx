import React from 'react';

import PlayerTimersContainer from './PlayerTimersContainer.jsx';
import TotalTimerContainer from './TotalTimerContainer.jsx';

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
