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
    return {data:ctaStops};
  },

  componentDidMount: function() {
  },

  render: function() {

    return (
      <div id="wrapper">
        <Map data={this.state.data} />
      </div>
    );
  }
});

module.exports = Wrapper;
