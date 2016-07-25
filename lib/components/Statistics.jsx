import React from 'react';

import { diff } from './../utils/date';

import Timer from './Timer.jsx';

/**
 * Get the time objects for the different statistical timers
 *
 * @param {?number} start
 * @param {?number} finish
 * @param {number} elapsed
 * @returns {Time|boolean}
 */
function timeObject(start, finish, elapsed) {
  if (finish === null) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    };
  }

  return diff(start + elapsed, finish);
}

function Statistics(props) {
  return (
    <div className={props.finish === null ? 'no' : ''}>
      <div>
        <span>Paused time:</span>

        <Timer {...timeObject(props.start, props.finish, props.elapsed)} />
      </div>

      <div>
        <span>Total time:</span>

        <Timer {...timeObject(props.start, props.finish, 0)} />
      </div>
    </div>
  );
}

export default Statistics;
