var React = require('react');
var StreetViewImage = require('./streetViewImage');

var StreetViewContainer = React.createClass({

  render: function() {

    return (
      <StreetViewImage lat={this.props.data.lat} long={this.props.data.long} />
    );
  }
});

module.exports = StreetViewContainer;
