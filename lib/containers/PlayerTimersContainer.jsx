import { connect } from 'react-redux';

import { addPlayer, next } from './../actions/actions';

import PlayerTimers from './../components/PlayerTimers.jsx';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    clickAddHandler: function () {
      dispatch(addPlayer());
    },

    clickNextHandler: function () {
      dispatch(next());
    },
  };
}

const PlayerTimersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerTimers);

export default PlayerTimersContainer;
