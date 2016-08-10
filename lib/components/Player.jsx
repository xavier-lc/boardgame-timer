import React, { PropTypes } from 'react';

import Timer from './Timer.jsx';

const propTypes = {
  isActive: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  elapsed: PropTypes.number.isRequired,
};

function Player(props) {
  return (
    <div>
      <span className={props.isActive ? 'active' : ''}>{props.name}</span>

      <Timer elapsed={props.elapsed} />
    </div>
  );
}

Player.propTypes = propTypes;

export default Player;
