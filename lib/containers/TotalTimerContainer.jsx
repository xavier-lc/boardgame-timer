import { connect } from 'react-redux';

import { play, tick, pause, resume, stop } from './../actions/actions';

import TotalTimer from './../components/TotalTimer.jsx';

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
      dispatch(play());

      const intervalId = setInterval(
        () => dispatch(tick(intervalId)),
        100
      );
    },

    clickPauseHandler: function () {
      clearInterval(stateProps.stopwatch.intervalId);

      dispatch(pause());
    },

    clickResumeHandler: function () {
      dispatch(resume());

      const intervalId = setInterval(
        () => dispatch(tick(intervalId)),
        100
      );
    },

    clickStopHandler: function () {
      clearInterval(stateProps.stopwatch.intervalId);

      dispatch(stop());
    },
  };

  return Object.assign({}, stateProps, mapDispatchToProps);
}

const TotalTimerContainer = connect(
  mapStateToProps,
  null,
  mergeProps
)(TotalTimer);

export default TotalTimerContainer;
