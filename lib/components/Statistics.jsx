import React from 'react';

import Timer from './Timer.jsx';

function Statistics(props) {
  return (
    <div className={props.finish === null ? 'no' : ''}>
      <div>
        <span>Paused time:</span>

        <Timer elapsed={props.finish - props.start - props.elapsed} />
      </div>

      <div>
        <span>Total time:</span>

        <Timer elapsed={props.finish - props.start} />
      </div>
    </div>
  );
}

export default Statistics;
