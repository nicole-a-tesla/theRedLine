var React = require('react');

var StreetViewImage = React.createClass({

  getInitialState: function() {
    // console.log('getting initial state for image...');
    return {imgUrl: 'https://maps.googleapis.com/maps/api/streetview?size=400x400&location=' + this.props.lat + ',' + this.props.long + '&pitch=-0.76'}
  },

  render: function() {
    console.log('rendering streetViewImage');
    // console.log('imgUrl is ');
    // console.log(this.state.imgUrl);
    return (
      <img src={this.state.imgUrl}></img>
    )
  }
});

module.exports = StreetViewImage;
