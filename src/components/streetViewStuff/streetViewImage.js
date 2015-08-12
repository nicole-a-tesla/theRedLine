var React = require('react');

var StreetViewImage = React.createClass({

  render: function() {
    return (
      <iframe
        width="100%"
        height="200"
        frameborder="0"
        src={
                "https://www.google.com/maps/embed/v1/streetview?key=AIzaSyBU2ArHRLAJwCb8Akp_ieojJMoM_92XaHk&location="
                + this.props.data.lat
                + ","
                + this.props.data.long
                + "&heading="
                + this.props.data.heading
                + "&pitch="
                + this.props.data.pitch
                + "&fov="
                + this.props.data.fov
          } >
      </iframe>
    );
  }

});

module.exports = StreetViewImage;
