var React = require('react');
var StreetViewContainer = require('./streetViewStuff/streetViewContainer');
var InstagramContainer = require('./instagramStuff/instagramContainer');
var $ = require('jquery');

var TrainStation = React.createClass({

  getInitialState: function() {
    return {}
  },

  render: function() {
    return (
      <div className='trainStation' id={this.props.data.station_name}>
      </div>
    );
  }
});

module.exports = TrainStation;
        // <StreetViewContainer className={'streetViewContainer' + this.props.data.station_name} stationName={this.props.data.station_name} lat={this.props.data.lat} long={this.props.data.long} data={this.props.data} />
        // <InstagramContainer className={'instagramContainer' + this.props.data.station_name} stationName={this.props.data.station_name} lat={this.props.data.lat} long={this.props.data.long} data={this.props.data} />
