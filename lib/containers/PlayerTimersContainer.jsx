import connect from 'react-redux/lib/components/connect';

import { addPlayer, next, changeName } from './../actions/actions';

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
      dispatch(changeName(
        e.target.dataset.playerid,
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
