const React = require('react');

const date = require('./../../date');

const Timer = require('./Timer');
const PlayButton = require('./PlayButton');

class TotalTimer extends React.Component {
  constructor(props) {
    super(props);

    this.clickPlayHandler = this.clickPlayHandler.bind(this);

    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  clickPlayHandler(e) {
    this.start = Date.now();

    setInterval(this.updateTimer.bind(this), 100);
  }

  updateTimer() {
    this.setState(
      date.diff(this.start, Date.now())
    );
  }

  render() {
    return (
      <div>
        <Timer
          hours={this.state.hours}
          minutes={this.state.minutes}
          seconds={this.state.seconds}
        />

        <PlayButton clickHandler={this.clickPlayHandler} />
      </div>
    );
  }
}

module.exports = TotalTimer;
