var React = require('react');
// var TrainStopsMenu = require('./trainStuff/trainStopsMenu');
var TrainStation = require('./trainStation');
var Map = require('./mapStuff/map');

var $ = require('jquery');
var ctaStops =  require('./ctaStops');

var Wrapper = React.createClass({
  loadStops: function() {
  },

  getInitialState: function() {
    return {data:ctaStops, position: 0};
  },

  componentDidMount: function() {
  },

  stationChange: function(newPosition){
    this.setState({position: newPosition})
  },

  render: function() {
    console.log(ctaStops[this.state.position].station_name);

    return (
      <div id="wrapper">
        <Map onStationChange={this.stationChange} data={this.state.data} />
        <TrainStation data={this.state.data} position={this.state.position}/>
      </div>
    );
  }
});

module.exports = Wrapper;
