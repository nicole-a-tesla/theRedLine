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

      this.divIcon = L.divIcon({className: 'stationMarker', iconSize:[15,15]});
      this.marker  = L.marker([42.019063, -87.672892], {icon: this.divIcon}).addTo(this.nativeMap);

    }.bind(this));

  },

  moveDown: function() {
    if(this.state.position + 1 < ctaStops.length){
      this.props.onStationChange(this.state.position + 1);

      this.marker.setLatLng([ctaStops[this.state.position + 1].lat, ctaStops[this.state.position + 1].long ])

      var newLat = ctaStops[this.state.position + 1].lat;
      var newLong = ctaStops[this.state.position + 1].long + this.state.lonOffset;

      this.nativeMap.panTo([newLat, newLong], {animate: true, duration: 2});
      this.setState({position: this.state.position + 1});

    }
    else{
      var lat = ctaStops[this.state.position].lat
      var long = ctaStops[this.state.position].long + this.state.lonOffset;
      this.nativeMap.panTo([lat-0.002, long], {animate: true, duration: 0.5})
      setTimeout(function(){
        this.nativeMap.panTo([lat, long], {animate: true, duration: 0.5});
      }.bind(this),400)

    }
  },

  moveUp: function() {

    if(this.state.position - 1 >= 0 ){
      this.props.onStationChange(this.state.position - 1);
      this.marker.setLatLng([ctaStops[this.state.position - 1].lat, ctaStops[this.state.position - 1].long ])

      var newLat = ctaStops[this.state.position - 1].lat;
      var newLong = ctaStops[this.state.position - 1].long + this.state.lonOffset;

      this.nativeMap.panTo([newLat, newLong], {animate: true, duration: 2});
      this.setState({position: this.state.position - 1});
    }
    else{

      var lat = ctaStops[this.state.position].lat
      var long = ctaStops[this.state.position].long + this.state.lonOffset;
      this.nativeMap.panTo([lat+0.002, long], {animate: true, duration: 0.5})
      setTimeout(function(){
        this.nativeMap.panTo([lat, long], {animate: true, duration: 0.5});
      }.bind(this),400)
    }
  },

  onWheel: function(e) {
    e.preventDefault();

    if (this.state.moving == false) {
      this.setState({moving: true})
      e.deltaY > 0 ? this.moveDown() : this.moveUp();
      this.nativeMap.once('moveend', function(){
        this.setState({moving: false});
      }.bind(this))
    }
  },

  onStationChange: function() {},

  render: function() {
    return (
      <div id='map' onClick={this.moveTo} onWheel={this.onWheel}>

      </div>
    )
  }
})

module.exports = Map;
