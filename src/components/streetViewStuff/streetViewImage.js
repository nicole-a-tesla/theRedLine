var React = require('react');

var StreetViewImage = React.createClass({

  loadStreetView: function() {
    var trainStation = new google.maps.LatLng(this.props.lat, this.props.long);
    var panoramaOptions = {
      position: trainStation,
      pov: {
        heading: 165,
        pitch: 0
      },
      zoom: 1
    };

    var myPano = new google.maps.StreetViewPanorama(
      document.getElementById('streetview-canvas'),
      panoramaOptions);
    myPano.setVisible(true);
  },

  componentDidMount: function() {
    this.loadStreetView();
  },

  render: function() {
    return (
      <div id="streetview-canvas"></div>
    );
  }

});


//
// function initialize() {
//   var bryantPark = new google.maps.LatLng(37.869260, -122.254811);
//   var panoramaOptions = {
//     position: bryantPark,
//     pov: {
//       heading: 165,
//       pitch: 0
//     },
//     zoom: 1
//   };
//   var myPano = new google.maps.StreetViewPanorama(
//       document.getElementById('map-canvas'),
//       panoramaOptions);
//   myPano.setVisible(true);
// }
//
// google.maps.event.addDomListener(window, 'load', initialize);


//   render: function() {
//     return (
//       <img src={'https://maps.googleapis.com/maps/api/streetview?size=700x200&location=' + this.props.lat + ',' + this.props.long + '&pitch=-0.76'}></img>
//     )
//   }
// });
module.exports = StreetViewImage;
