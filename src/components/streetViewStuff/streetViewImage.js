var React = require('react');

var StreetViewImage = React.createClass({

  getInitialState: function() {
    return {imgUrl: 'https://maps.googleapis.com/maps/api/streetview?size=400x400&location=' + this.props.lat + ',' + this.props.long + '&pitch=-0.76'}
  },

  render: function() {
    return (
      <img src={this.state.imgUrl}></img>
    )
  }
});

module.exports = StreetViewImage;
