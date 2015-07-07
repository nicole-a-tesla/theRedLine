var React = require('react');
var TrainStopsMenu = require('./trainStuff/trainStopsMenu');
var TrainStation = require('./trainStation');

var $ = require('jquery');
var ctaStops =  require('./ctaStops');

var Wrapper = React.createClass({
  loadStops: function() {
  },

  getInitialState: function() {
    return {data:ctaStops};
  },

  componentDidMount: function() {
  },

  render: function() {
    var trainStationNodes = this.state.data.map(function (thisStationData) {
      // console.log(thisStationData);
      return (
        <TrainStation data={thisStationData} />
      );
    });
    return (
      <div id="wrapper">
        <TrainStopsMenu stationName={this.state.data.station_name} lat={this.state.data.lat} long={this.state.data.long} data={this.state.data}></TrainStopsMenu>
        <div id='stationsWrapper'>
          {trainStationNodes}
        </div>
      </div>
    );
  }
});

module.exports = Wrapper;
