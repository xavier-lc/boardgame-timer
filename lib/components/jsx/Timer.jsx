const React = require('react');

const TwoTimingDigits = require('./TwoTimingDigits');

class Timer extends React.Component {
  render() {
    return (
      <div>
        <TwoTimingDigits />
        :
        <TwoTimingDigits />
        :
        <TwoTimingDigits />
      </div>
    );
  }
}

module .exports = Timer;
