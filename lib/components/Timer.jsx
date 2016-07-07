const React = require('react');

const TwoTimingDigits = require('./TwoTimingDigits');

class Timer extends React.Component {
  render() {
    return (
      <div>
        <TwoTimingDigits value={this.props.hours} />
        :
        <TwoTimingDigits value={this.props.minutes} />
        :
        <TwoTimingDigits value={this.props.seconds} />
      </div>
    );
  }
}

module .exports = Timer;
