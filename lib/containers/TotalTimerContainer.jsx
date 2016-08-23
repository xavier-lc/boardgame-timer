import connect from 'react-redux/lib/components/connect';

import { play, addPlayer, next, pause, resume, stop } from './../actions/actions';

import TotalTimer from './../components/TotalTimer.jsx';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    clickPlayHandler: function () {
      dispatch(play());
    },

    clickAddHandler: function () {
      dispatch(addPlayer());
    },

    clickNextHandler: function () {
      dispatch(next());
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
