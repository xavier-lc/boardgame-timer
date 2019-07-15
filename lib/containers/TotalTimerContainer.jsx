import connect from 'react-redux/lib/connect/connect';
import { play, addPlayer, next, pause, resume, stop } from 'state/actions';
import TotalTimer from 'components/TotalTimer';

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        clickPlayHandler: function() {
            dispatch(play());
        },

        clickAddHandler: function() {
            dispatch(addPlayer());
        },

        clickNextHandler: function() {
            dispatch(next());
        },

        clickPauseHandler: function() {
            dispatch(pause());
        },

        clickResumeHandler: function() {
            dispatch(resume());
        },

        clickStopHandler: function() {
            dispatch(stop());
        }
    };
}

const TotalTimerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TotalTimer);

export default TotalTimerContainer;
