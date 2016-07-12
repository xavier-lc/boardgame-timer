const types = require('./../constants/actionTypes');

module.exports = (function actions() {
  function play() {
    return {
      type: types.PLAY,
      time: Date.now(),
    };
  }

  function tick(intervalId) {
    return {
      type: types.TICK,
      time: Date.now(),
      intervalId: intervalId,
    };
  }

  function pause() {
    return {
      type: types.PAUSE,
      time: Date.now(),
    };
  }

  function resume() {
    return {
      type: types.RESUME,
      time: Date.now(),
    };
  }

  return {
    play: play,
    tick: tick,
    pause: pause,
    resume: resume,
  };
})();
