var React = require('react');
var TrainStopsMenu = require('./trainStuff/trainStopsMenu');
var InstagramContainer = require('./instagramStuff/instagramContainer');
var StreetViewContainer = require('./streetViewStuff/streetViewContainer')
var $ = require('jquery')
var ctaStops =  require('./ctaStops')

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
        <TrainStopsMenu data={this.state.data} />
        <StreetViewContainer data={this.state.data} />
        <InstagramContainer data={this.state.data} />
      </div>
    );
  }
});

module.exports = Wrapper;
