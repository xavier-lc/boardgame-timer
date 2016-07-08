const connect = require('react-redux').connect;

const actions = require('./../actions/actions');

const TotalTimer = require('./../components/TotalTimer');

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    clickPlayHandler: function () {
      dispatch(actions.play());

      const intervalId = setInterval(
        () => dispatch(actions.tick(intervalId)),
        100
      );
    },
  };
}

const TotalTimerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TotalTimer);

module.exports = TotalTimerContainer;
