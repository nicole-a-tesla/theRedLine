var React = require('react');
var StreetViewContainer = require('./streetViewStuff/streetViewContainer');
var InstagramContainer = require('./instagramStuff/instagramContainer');
var ctaStops =  require('./ctaStops');
var $ = require('jquery');

var TrainStation = React.createClass({

  getInitialState: function() {
    return {position: 0, stationData: this.props.data[0]}
  },

  render: function() {
    console.log(ctaStops[this.props.position].station_name);
    return (
      <div className='trainStation' id={ctaStops[this.props.position].station_name}>
        <StreetViewContainer className={'streetViewContainer'} data={ctaStops[this.props.position]} />

      </div>
    );
  }
});

module.exports = TrainStation;
        // <InstagramContainer className={'instagramContainer' + this.props.data.station_name} stationName={this.props.data.station_name} lat={this.props.data.lat} long={this.props.data.long} data={this.props.data} />
