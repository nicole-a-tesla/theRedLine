var React = require('react');
var $ = require('jquery');

var StreetViewList = React.createClass({
  getInitialState: function() {
    return {imgUrl: 'https://maps.googleapis.com/maps/api/streetview?size=400x400&location=' + this.props.data.lat + ',' + this.props.data.long + '&pitch=-0.76'}
  },

  // loadStreetViewData: function(event) {
  //   $.ajax({
  //     url: 'https://maps.googleapis.com/maps/api/streetview?size=400x400&location=' + this.props.data.lat + ',' + this.props.data.long, //+ '&fov=90&heading=235&pitch=10'
  //     type: 'GET',
  //     cache: false,
  //
  //     success: function(data) {
  //       console.log("OH SHIT ITS SUCCESS O'CLOOOOOOOOCK");
  //       this.setState({imgUrl: data })
  //     }.bind(this),
  //     error: function(xhr, status, err) {
  //       console.error(this.props.url, status, err.toString());
  //     }.bind(this)
  //   });
  // },
  //
  // componentDidMount: function() {
  //   this.loadStreetViewData();
  // },

  render: function() {
    return (
      <img className='streetViewImage' src={this.state.imgUrl} />
    );
  }
});

module.exports = StreetViewList;
