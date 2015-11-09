var React = require('react');

var TrainStation = require('./trainStation');
var Map = require('./mapStuff/map');

var $ = require('jquery');
var ctaStops =  require('./ctaStops');

var InstructionsModal = require ('./instructionsModal')

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
    return (
      <div id="wrapper">
        <InstructionsModal />
        <Map onStationChange={this.stationChange} data={this.state.data} />
        <TrainStation data={this.state.data} position={this.state.position}/>
      </div>
    );
  }
});

module.exports = Wrapper;
