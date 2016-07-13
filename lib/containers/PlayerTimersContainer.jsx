const connect = require('react-redux').connect;

const PlayerTimers = require('./../components/PlayerTimers');

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    clickAddHandler: function () {

    },
  };
}

const PlayerTimersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerTimers);

module.exports = PlayerTimersContainer;
