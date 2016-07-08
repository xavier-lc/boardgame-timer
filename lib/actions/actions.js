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

  return {
    play: play,
    tick: tick,
  };
})();
