import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Player from './Player.jsx';
import Timer from './Timer.jsx';
import TimerButton from './TimerButton.jsx';

const propTypes = {
  players: PropTypes.object.isRequired,
  stopwatch: PropTypes.object.isRequired,
};

class PlayerTotals extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showTotals: false };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({ showTotals: !this.state.showTotals });
  }

  render() {
    const totalsCls = classnames({
      player__totals: this.props.stopwatch.finish === null,
      hidden: !this.state.showTotals && this.props.stopwatch.finish === null,
    });

    const buttonTxt = `${this.state.showTotals ? 'Hide' : 'Show'} accumulated time`;

    return (
      <div>
        <TimerButton
          clickHandler={this.clickHandler}
          isVisible={this.props.stopwatch.start !== null && this.props.stopwatch.finish === null}
          txt={buttonTxt}
          className="btn-link btn-block btn-lg"
        />

        <div className={totalsCls}>
          {this.props.players.ids.map(id => (
            <div key={`total_${id}`}>
              <span className="stats__title">{`${this.props.players.data[id].name}:`}</span>

              <Timer
                elapsed={this.props.players.turns[id].reduce((previous, val) => previous + val, 0)}
                isOn={this.props.stopwatch.isOn}
                isVisible
                className="inb"
              />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

PlayerTotals.propTypes = propTypes;

export default PlayerTotals;
