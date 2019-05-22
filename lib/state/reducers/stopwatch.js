import { PLAY, PAUSE, RESUME, STOP, TICK } from 'state/constants';

/**
 * Initial state for TotalTimerContainer
 *
 * @typedef {object} TimerState
 * @property {boolean} isOn
 * @property {number} elapsed
 * @property {?number} start
 * @property {?number} finish
 * @property {?number} offset
 */
const initialState = {
    isOn: false,
    elapsed: 0,
    start: null,
    finish: null,
    offset: null
};

/**
 * Reducer for TotalTimerContainer
 *
 * @param {TimerState} state
 * @param {TimerAction} action
 * @returns {TimerState}
 */
function stopwatch(state = initialState, action) {
    switch (action.type) {
        case PLAY:
            return Object.assign({}, state, {
                isOn: true,
                start: action.time,
                offset: action.time
            });

        case PAUSE:
            return Object.assign({}, state, {
                isOn: false,
                elapsed: action.time - state.offset
            });

        case RESUME:
            return Object.assign({}, state, {
                isOn: true,
                offset: action.time - state.elapsed
            });

        case STOP:
            return Object.assign({}, state, {
                finish: action.time
            });

        case TICK:
            return Object.assign({}, state, {
                elapsed: action.time - state.offset
            });

        default:
            return state;
    }
}

export { initialState };
export default stopwatch;
