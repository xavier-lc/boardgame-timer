import connect from 'react-redux/lib/connect/connect';
import { changeName } from 'state/actions';
import PlayerTimers from 'components/PlayerTimers';

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        inputChangeHandler: function(e) {
            dispatch(changeName(e.target.dataset.playerid, e.target.value));
        }
    };
}

const PlayerTimersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerTimers);

export default PlayerTimersContainer;
