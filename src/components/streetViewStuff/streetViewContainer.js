
var React = require('react');
var StreetViewsByStop = require('./streetViewsByStop');
var StreetViewImage = require('./streetViewImage');

var StreetViewContainer = React.createClass({

  render: function() {
    console.log('rendering streetViewContainer');
    // console.log('this.props.data.lat = ');
    // console.log(this.props.data.lat);
    return (
      <StreetViewImage lat={this.props.data.lat} long={this.props.data.long} />
    );
  }
});

module.exports = StreetViewContainer;
