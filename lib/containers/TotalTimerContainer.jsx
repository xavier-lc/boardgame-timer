const connect = require('react-redux').connect;

const actions = require('./../actions/actions');

const TotalTimer = require('./../components/TotalTimer');

function mapStateToProps(state) {
  return state;
}

/**
 * Using this approach in order to be able to access the intervalId stored in the state when
 * dispatching actions
 *
 * @see https://github.com/reactjs/react-redux/issues/237#issuecomment-168816713
 *
 * @param {object} stateProps
 * @param {{dispatch: function}} dispatchProps
 * @returns {object}
 */
function mergeProps(stateProps, dispatchProps) {
  const dispatch = dispatchProps.dispatch;

  const mapDispatchToProps = {
    clickPlayHandler: function () {
      dispatch(actions.play());

      const intervalId = setInterval(
        () => dispatch(actions.tick(intervalId)),
        100
      );
    },

    clickPauseHandler: function () {
      clearInterval(stateProps.stopwatch.intervalId);

      dispatch(actions.pause());
    },

    clickResumeHandler: function () {
      dispatch(actions.resume());

      const intervalId = setInterval(
        () => dispatch(actions.tick(intervalId)),
        100
      );
    },

    clickStopHandler: function () {
      clearInterval(stateProps.stopwatch.intervalId);

      dispatch(actions.stop());
    },
  };

  return Object.assign({}, stateProps, mapDispatchToProps);
}

const TotalTimerContainer = connect(
  mapStateToProps,
  null,
  mergeProps
)(TotalTimer);

module.exports = TotalTimerContainer;
