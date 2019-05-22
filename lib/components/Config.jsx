import React from 'react';
import TurnTime from 'components/TurnTime';

function Config(props) {
    return (
        <div className="panel panel-primary">
            <div className="panel-body">
                <TurnTime
                    minutes={props.config.turnTime.minutes}
                    seconds={props.config.turnTime.seconds}
                    maxMinutes={props.config.turnTime.maxMinutes}
                    selectChangeHandler={props.selectChangeHandler}
                />

                <p className="configText text-muted">
                    This is the time it takes the progress bar to be filled,
                    with its color turning red when 90% of it is reached. Once
                    completed, the timer keeps counting, it's just meant to be a
                    reference for the players.
                </p>
            </div>
        </div>
    );
}

export default Config;
