const React = require('react');

const Timer = require('./Timer');
const PlayButton = require('./PlayButton');

class TotalTimer extends React.Component {
  render() {
    return (
      <div>
        <Timer
          hours={this.props.hours}
          minutes={this.props.minutes}
          seconds={this.props.seconds}
        />

        <PlayButton clickHandler={this.props.clickPlayHandler} />
      </div>
    );
  }
}

module.exports = TotalTimer;
