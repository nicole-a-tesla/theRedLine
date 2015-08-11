var React = require('react');
var StreetViewImage = require('./streetViewImage');

var StreetViewContainer = React.createClass({

  render: function() {
    return (
      <StreetViewImage data={this.props.data} />
    );
  }
});

module.exports = StreetViewContainer;
