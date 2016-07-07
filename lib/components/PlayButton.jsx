const React = require('react');

class PlayButton extends React.Component {
  render() {
    return <button onClick={this.props.clickHandler}>Play</button>;
  }
}

module.exports = PlayButton;
