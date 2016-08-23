import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Timer from './Timer.jsx';

const propTypes = {
  elapsed: PropTypes.number.isRequired,
  isOn: PropTypes.bool.isRequired,
  start: PropTypes.number,
  finish: PropTypes.number,
};

function Statistics(props) {
  const statisticsCls = classnames({ hidden: props.finish === null });

  return (
    <div className={statisticsCls}>
      <div>
        <span>Total time:</span>

        <Timer
          elapsed={props.finish - props.start}
          isOn={props.isOn}
          isVisible
        />
      </div>

      <div>
        <span>Paused time:</span>

        <Timer
          elapsed={props.finish - props.start - props.elapsed}
          isOn={props.isOn}
          isVisible />
      </div>
    </div>
  );
}

Statistics.propTypes = propTypes;

export default Statistics;
