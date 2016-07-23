const React = require('react');

const Timer = require('./Timer.jsx');

function Player(props) {
  return (
    <div>
      <span className={props.isActive ? 'active' : ''}>{props.name}</span>

      <Timer
        hours={props.hours}
        minutes={props.minutes}
        seconds={props.seconds}
      />
    </div>
  );
}

module.exports = Player;
