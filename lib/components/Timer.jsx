import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { msToTime, leadingZeros } from 'utils/date';
import TwoTimingDigits from 'components/TwoTimingDigits';

const propTypes = {
    elapsed: PropTypes.number.isRequired,
    isOn: PropTypes.bool.isRequired,
    isVisible: PropTypes.bool.isRequired,
    title: PropTypes.string,
    className: PropTypes.string,
    hideHours: PropTypes.bool
};

function Timer(props) {
    const timerCls = classnames({
        hidden: !props.isVisible,
        [`${props.className}`]: props.className
    });

    const time = msToTime(props.elapsed);

    // even with the prop set, hide the hours bit only if it's 0
    const hoursCls = classnames({
        hidden: props.hideHours && time.hours === 0
    });
    const msCls = classnames({ hidden: props.isOn || props.elapsed === 0 });

    return (
        <div className={timerCls}>
            <span className={hoursCls}>
                <TwoTimingDigits value={time.hours} />:
            </span>
            <TwoTimingDigits value={time.minutes} />
            :
            <TwoTimingDigits value={time.seconds} />
            <span className={msCls}>.{leadingZeros(time.milliseconds, 3)}</span>
        </div>
    );
}

Timer.propTypes = propTypes;

export default Timer;
