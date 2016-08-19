import connect from 'react-redux/lib/components/connect';

import { play, pause, resume, stop } from './../actions/actions';

import TotalTimer from './../components/TotalTimer.jsx';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    clickPlayHandler: function () {
      dispatch(play());
    },

    clickPauseHandler: function () {
      dispatch(pause());
    },

    clickResumeHandler: function () {
      dispatch(resume());
    },

    clickStopHandler: function () {
      dispatch(stop());
    },
  };
}

const TotalTimerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TotalTimer);

export default TotalTimerContainer;
