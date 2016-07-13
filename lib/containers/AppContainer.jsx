const React = require('react');

const TotalTimerContainer = require('./TotalTimerContainer');
const PlayerTimersContainer = require('./PlayerTimersContainer');

function AppContainer() {
  return (
    <div>
      <TotalTimerContainer />
      <PlayerTimersContainer />
    </div>
  );
}

module.exports = AppContainer;
