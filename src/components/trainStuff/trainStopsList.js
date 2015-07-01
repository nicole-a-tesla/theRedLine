var React = require('react');
var TrainStop = require('./trainStop');

var TrainStopsList = React.createClass({
  render: function() {
    var trainStopNodes = this.props.data.map(function (stop) {
      return (
        <TrainStop stopName={stop.station_name} lat={stop.lat} long={stop.long}></TrainStop>
      );
    });

    return (
      <div id="trainStopsList">
        <ul>
          {trainStopNodes}
        </ul>
      </div>
    );
  }
});

module.exports = TrainStopsList;
