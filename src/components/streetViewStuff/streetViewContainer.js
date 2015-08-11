var React = require('react');
var StreetViewImage = require('./streetViewImage');

var StreetViewContainer = React.createClass({

  render: function() {
    console.log('in StreetViewContainer. this.props.data = ');
    console.log(this.props.data);
    return (
      <StreetViewImage data={this.props.data} />
    );
  }
});

module.exports = StreetViewContainer;
