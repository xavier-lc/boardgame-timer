const React = require('react');

const date = require('./../utils/date');

class TwoTimingDigits extends React.Component {
  render() {
    return (
      <span>
        {date.twoDigits(this.props.value)}
      </span>
    );
  }
}

module.exports = TwoTimingDigits;
