const connect = require('react-redux').connect;

const actions = require('./../actions/actions');

const PlayerTimers = require('./../components/PlayerTimers.jsx');

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    clickAddHandler: function () {
      dispatch(actions.addPlayer());
    },

    clickNextHandler: function () {
      dispatch(actions.next());
    },
  };
}

const PlayerTimersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerTimers);

module.exports = PlayerTimersContainer;
