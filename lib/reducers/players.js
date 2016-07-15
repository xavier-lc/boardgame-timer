const initialState = {
  ids: [1],
  data: {
    1: {
      name: 'Player #1',
      isActive: true,
    },
  },
  time: {
    1: {
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    },
  },
};

function players(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

module.exports = players;
