var React = require('react');
var StreetViewImage = require('./streetViewImage');

var StreetViewContainer = React.createClass({

  render: function() {
    console.log('------------------------');
    console.log('in StreetViewContainer');
    console.log('------------------------');
    return (
      <StreetViewImage lat={this.props.data.lat} long={this.props.data.long} />
    );
  }
});

module.exports = StreetViewContainer;
