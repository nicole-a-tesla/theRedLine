// apiKey = AIzaSyAScvA5cRDRSbthAZieikPmT_LAQQPpO5Y

var React = require('react')
var StreetViewsByStop = require('./streetViewsByStop')

var StreetViewContainer = React.createClass({
  render: function() {
    return (
      <StreetViewsByStop data={this.props.data} />
    );
  }
});

module.exports = StreetViewContainer;
