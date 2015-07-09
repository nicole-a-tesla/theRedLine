var React = require('react');

var Map = React.createClass({
  componentDidMount: function() {
    cartodb.createVis('map', 'https://nicole-a-tesla.cartodb.com/api/v2/viz/0713289c-2682-11e5-9584-0e49835281d6/viz.json');
  },
  render: function() {
    return (
      <div id='map'></div>
    )
  }
})

module.exports = Map;
