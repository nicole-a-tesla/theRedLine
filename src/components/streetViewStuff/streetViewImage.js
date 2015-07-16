var React = require('react');

var StreetViewImage = React.createClass({
  render: function() {
    return (
      <img src={'https://maps.googleapis.com/maps/api/streetview?size=700x200&location=' + this.props.lat + ',' + this.props.long + '&pitch=-0.76'}></img>
    )
  }
});

module.exports = StreetViewImage;
