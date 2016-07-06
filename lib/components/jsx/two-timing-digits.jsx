const React = require('react');

const date = require('./../../date');

class TwoTimingDigits extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };
  }

  render() {
    return (
      <span>
        {date.twoDigits(this.state.value)}
      </span>
    );
  }
}

module.exports = TwoTimingDigits;
