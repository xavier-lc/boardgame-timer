const connect = require('react-redux').connect;

const actions = require('./../actions/actions');

const PlayerTimers = require('./../components/PlayerTimers');

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    clickAddHandler: function () {
      dispatch(actions.addPlayer());
    },
  };
}

const PlayerTimersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerTimers);

module.exports = PlayerTimersContainer;
