var React = require('react');

var StreetViewImage = React.createClass({

  render: function() {
    console.log(this.props.long);
    return (
      <iframe
        width="100%"
        height="150"
        frameborder="0"
        src={"https://www.google.com/maps/embed/v1/streetview?key=AIzaSyBU2ArHRLAJwCb8Akp_ieojJMoM_92XaHk&location=" + this.props.lat + "," + this.props.long} >
      </iframe>
    );
  }
  
});

//   render: function() {
//     return (
//       <img src={'https://maps.googleapis.com/maps/api/streetview?size=700x200&location=' + this.props.lat + ',' + this.props.long + '&pitch=-0.76'}></img>
//     )
//   }
// });
module.exports = StreetViewImage;
