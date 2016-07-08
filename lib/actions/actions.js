const types = require('./../constants/actionTypes');

module.exports = (function actions() {
  function play() {
    return {
      type: types.PLAY,
      time: Date.now()
    };
  }

  function tick() {
    return {
      type: types.TICK,
      time: Date.now()
    };
  }

  return {
    play: play,
    tick: tick
  }
})();
