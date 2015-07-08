var React = require('react');
var TrainStopsList = require('./TrainStopsList');

var TrainStopsMenu = React.createClass({
  render: function() {

    return (
      <header id="trainStopsBox">
        <TrainStopsList data={this.props.data} />
      </header>
    );
  }
});

module.exports = TrainStopsMenu;
