import connect from 'react-redux/lib/connect/connect';

import { changeTurnTime } from './../actions/actions';

import Config from './../components/Config.jsx';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    selectChangeHandler: function (e) {
      dispatch(changeTurnTime(
        e.target.dataset.units,
        e.target.value
      ));
    },
  };
}

const ConfigContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Config);

export default ConfigContainer;
