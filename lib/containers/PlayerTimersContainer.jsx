import { connect } from 'react-redux';

import { addPlayer, next, nameInputChange } from './../actions/actions';

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

    inputChangeHandler: function (e) {
      dispatch(nameInputChange(
        e.target.id,
        e.target.value
      ));
    },
  };
}

const PlayerTimersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerTimers);

export default PlayerTimersContainer;
