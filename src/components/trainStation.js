var React = require('react');
var StreetViewContainer = require('./streetViewStuff/streetViewContainer');
var InstagramContainer = require('./instagramStuff/instagramContainer');

var TrainStation = React.createClass({
  render: function() {
    console.log('rendering TrainStation ' + this.props.data.station_name);
    console.log('this.props.data = ');
    console.log(this.props.data);
    return (
      <div className={this.props.data.station_name}>
        <StreetViewContainer className={'streetViewContainer' + this.props.data.station_name} stationName={this.props.data.station_name} lat={this.props.data.lat} long={this.props.data.long} data={this.props.data} />
      </div>
    );
  }
});

module.exports = TrainStation;
