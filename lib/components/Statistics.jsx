import React, { PropTypes } from 'react';

import Timer from './Timer.jsx';

const propTypes = {
  elapsed: PropTypes.number.isRequired,
  start: PropTypes.number,
  finish: PropTypes.number,
};

function Statistics(props) {
  return (
    <div className={props.finish === null ? 'no' : ''}>
      <div>
        <span>Total time:</span>

        <Timer elapsed={props.finish - props.start} isVisible />
      </div>

      <div>
        <span>Paused time:</span>

        <Timer elapsed={props.finish - props.start - props.elapsed} isVisible />
      </div>
    </div>
  );
}

Statistics.propTypes = propTypes;

export default Statistics;
