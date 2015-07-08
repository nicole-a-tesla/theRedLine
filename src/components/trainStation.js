var React = require('react');
var StreetViewContainer = require('./streetViewStuff/streetViewContainer');
var InstagramContainer = require('./instagramStuff/instagramContainer');
var $ = require('jquery');

var TrainStation = React.createClass({

  // componentDidMount: function() {
  //   var offset = $('#' + this.props.data.station_name).offset().left;
  //   var size =  $('#' + this.props.data.station_name).width();
  //   var whereTheStationIs = offset - size;
  //   console.log(whereTheStationIs);
  //
  //   // debugger;
  //
  //   $(window).on('scroll', function(boundThis){
  //
  //     var stop = Math.round($(window).scrollLeft());
  //     if (stop > whereTheStationIs) {
  //         // $('.nav').addClass('past-main');
  //         debugger;
  //         // $('#trainStopsList ul li#JarvisMenu')
  //     } else {
  //         $('.nav').removeClass('past-main');
  //     }
  //
  //   });
  // },

  render: function() {
    return (
      <div className='trainStation' id={this.props.data.station_name}>
        <StreetViewContainer className={'streetViewContainer' + this.props.data.station_name} stationName={this.props.data.station_name} lat={this.props.data.lat} long={this.props.data.long} data={this.props.data} />
        <InstagramContainer className={'instagramContainer' + this.props.data.station_name} stationName={this.props.data.station_name} lat={this.props.data.lat} long={this.props.data.long} data={this.props.data} />
      </div>
    );
  }
});

module.exports = TrainStation;
