import {
    PLAY,
    PAUSE,
    TICK,
    RESUME,
    STOP,
    ADD_PLAYER,
    NEXT,
    NAME_INPUT_CHANGE,
    TURN_TIME_CHANGE
} from 'state/constants';

/**
 * @typedef {object} TimerAction
 * @property {string} type
 * @property {number} [time] - Optional, moment when the action was triggered
 */

/**
 * @typedef {object} InputAction
 * @property {string} type
 * @property {number} id
 * @property {string} value
 */

/**
 * @typedef {object} SelectAction
 * @property {string} type
 * @property {string} units
 * @property {string} value
 */

/**
 * @returns {TimerAction}
 */
function play() {
    return {
        type: PLAY,
        time: Date.now()
    };
}

/**
 * @returns {TimerAction}
 */
function tick() {
    return {
        type: TICK,
        time: Date.now()
    };
}

/**
 * @returns {TimerAction}
 */
function pause() {
    return {
        type: PAUSE,
        time: Date.now()
    };
}

/**
 * @returns {TimerAction}
 */
function resume() {
    return {
        type: RESUME,
        time: Date.now()
    };
}

/**
 * @returns {TimerAction}
 */
function stop() {
    return {
        type: STOP,
        time: Date.now()
    };
}

/**
 * @returns {TimerAction}
 */
function addPlayer() {
    return {
        type: ADD_PLAYER
    };
}

/**
 * @returns {TimerAction}
 */
function next() {
    return {
        type: NEXT,
        time: Date.now()
    };
}

/**
 * Change on one of the <input> elements setting the player's names
 *
 * @param {number} id - The id of the player involved
 * @param {string} value - The value of the input
 * @returns {InputAction}
 */
function changeName(id, value) {
    return {
        type: NAME_INPUT_CHANGE,
        id,
        value
    };
}

/**
 * Change on one og the <select> elements setting the turn time
 *
 * @param {string} units - The units (minutes or seconds) of the select involved
 * @param {string} value - The value of the select
 * @returns {SelectAction}
 */
function changeTurnTime(units, value) {
    return {
        type: TURN_TIME_CHANGE,
        units,
        value
    };
}

export {
    play,
    tick,
    pause,
    resume,
    stop,
    addPlayer,
    next,
    changeName,
    changeTurnTime
};
