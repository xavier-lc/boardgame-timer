const React = require('react');
const redux = require('redux');

const date = require('./../date');

const Timer = require('./Timer');
const PlayButton = require('./PlayButton');

const initialState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  start: null
};

// actions
const PLAY = 'play';
const TICK = 'tick';

// action creators
function play() {
  return {
    type: PLAY
  };
}

function tick() {
  return {
    type: TICK
  };
}

// reducers
function stopwatch(state = initialState, action) {
  switch (action.type) {
    case PLAY:
      return Object.assign({}, state, {
        start: Date.now()
      });

    case TICK:
      return Object.assign({}, state, date.diff(state.start, Date.now()));

    default:
      return state;
  }
}

class TotalTimer extends React.Component {
  constructor(props) {
    super(props);

    // store
    this.store = redux.createStore(stopwatch);

    this.clickPlayHandler = this.clickPlayHandler.bind(this);
  }

  clickPlayHandler(e) {
    this.store.dispatch(play());

    setInterval(this.updateTimer.bind(this), 100);
  }

  updateTimer() {
    this.store.dispatch(tick());
  }

  render() {
    const state = this.store.getState();

    return (
      <div>
        <Timer
          hours={state.hours}
          minutes={state.minutes}
          seconds={state.seconds}
        />

        <PlayButton clickHandler={this.clickPlayHandler} />
      </div>
    );
  }
}

module.exports = TotalTimer;
