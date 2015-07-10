var React = require('react');

var Map = React.createClass({
  componentDidMount: function() {
    var url = 'https://nicole-a-tesla.cartodb.com/api/v2/viz/0713289c-2682-11e5-9584-0e49835281d6/viz.json'
    cartodb.createVis('map', url, {
      center_lat: 41.884809,
      center_lon: -87.627813
    });

  },
  render: function() {
    return (
      <div id='map'></div>
    )
  }
})

module.exports = Map;
