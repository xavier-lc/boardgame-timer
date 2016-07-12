const actions = require('./../constants/actionTypes');

module.exports = (function actionCreators() {
  function play() {
    return {
      type: actions.PLAY,
      time: Date.now(),
    };
  }

  function tick(intervalId) {
    return {
      type: actions.TICK,
      time: Date.now(),
      intervalId: intervalId,
    };
  }

  function pause() {
    return {
      type: actions.PAUSE,
      time: Date.now(),
    };
  }

  function resume() {
    return {
      type: actions.RESUME,
      time: Date.now(),
    };
  }

  function stop() {
    return {
      type: actions.STOP,
      time: Date.now(),
    };
  }

  return {
    play: play,
    tick: tick,
    pause: pause,
    resume: resume,
    stop: stop,
  };
})();
