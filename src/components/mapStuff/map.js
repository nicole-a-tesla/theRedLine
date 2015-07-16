var React = require('react');
var ctaStops = require('./../ctaStops');

var Map = React.createClass({
  getInitialState: function() {
    return {position: 0, lonOffset: 0.025, moving: false}
  },

  componentDidMount: function() {
    var url = 'https://nicole-a-tesla.cartodb.com/api/v2/viz/0713289c-2682-11e5-9584-0e49835281d6/viz.json'

    cartodb.createVis('map', url, {
      center_lat: 42.019063,
      center_lon: -87.672892 + this.state.lonOffset,
      cartodb_logo: false
    })
    .done(function(vis, layers){
      this.nativeMap = vis.getNativeMap();
    }.bind(this));

// use something like this to center the train line in the available screen regardless of screen size
    // map.fitBounds(bounds, {
    //   paddingTopLeft: [20, 30],
    //   paddingbottomRight: [40, 50]
    // });
  },

  moveDown: function() {
    console.log('traveling to station = ' + ctaStops[this.state.position + 1].station_name + ' at position = ' + this.state.position + " + 1");

    var newLat = ctaStops[this.state.position + 1].lat;
    var newLong = ctaStops[this.state.position + 1].long + this.state.lonOffset;

    this.nativeMap.panTo([newLat, newLong], {animate: true, duration: 2});
    this.setState({position: this.state.position + 1});
  },

  moveUp: function() {
    console.log('traveling to station = ' + ctaStops[this.state.position - 1].station_name + ' at position = ' + this.state.position + " - 1");

    var newLat = ctaStops[this.state.position - 1].lat;
    var newLong = ctaStops[this.state.position - 1].long + this.state.lonOffset;

    this.nativeMap.panTo([newLat, newLong], {animate: true, duration: 2});
    this.setState({position: this.state.position - 1});
  },

  onWheel: function(e) {
    e.preventDefault();

    if (this.state.moving == false) {
      this.setState({moving: true})
      e.deltaY > 0 ? this.moveDown() : this.moveUp();
      this.nativeMap.once('moveend', function(){
        this.setState({moving: false});
        this.props.onStationChange(this.state.position);
      }.bind(this))
    }
  },

  onStationChange: function() {
    // this.
  },

//
  // grabRedLine: function() {
  //   var sql = new cartodb.SQL({ user: 'nicole-a-tesla' });
  //
  //   sql.execute("SELECT * FROM parsed_stops", {format: 'geoJSON'})
  //   .done(function(data) {
  //   })
  //   .error(function(errors) {
  //     console.log("errors:" + errors);
  //   })
  // },

  render: function() {
    return (
      <div id='map' onClick={this.moveTo} onWheel={this.onWheel}></div>
    )
  }
})

module.exports = Map;
