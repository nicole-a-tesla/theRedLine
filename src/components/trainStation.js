var React = require('react');
var StreetViewContainer = require('./streetViewStuff/streetViewContainer');
var InstagramContainer = require('./instagramStuff/instagramContainer');
var ctaStops =  require('./ctaStops');
var $ = require('jquery');
var IncomeVis = require('./dataVis/incomeVis')

var TrainStation = React.createClass({

  getInitialState: function() {
    return {position: 0, stationData: this.props.data[0]}
  },

  render: function() {

    return (
      <div className='trainStation' id={ctaStops[this.props.position].station_name}>
        <StreetViewContainer className={'streetViewContainer'} data={ctaStops[this.props.position]} />
        <InstagramContainer className={'instagramContainer'} data={ctaStops[this.props.position]} />
        <IncomeVis data={ctaStops[this.props.position]} />
      </div>
    );
  }
});

module.exports = TrainStation;
