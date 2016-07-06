const React = require('react');

const Timer = require('./Timer');
const PlayButton = require('./PlayButton');

class TotalTimer extends React.Component {
  render() {
    return (
      <div>
        <Timer />
        <PlayButton />
      </div>
    );
  }
}

module.exports = TotalTimer;
