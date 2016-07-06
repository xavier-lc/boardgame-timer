const React = require('react');

class TwoTimingDigits extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };
    }

    render () {
        return <div>{this.state.value}</div>;
    }
}

module.exports = TwoTimingDigits;
