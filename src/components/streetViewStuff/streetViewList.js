var React = require('react');
var $ = require('jquery');

var StreetViewList = React.createClass({
  getInitialState: function() {
    return {imgUrl: 'https://maps.googleapis.com/maps/api/streetview?size=400x400&location=' + this.props.data.lat + ',' + this.props.data.long + '&pitch=-0.76'}
  },


  render: function() {
    console.log("Pretty sure streetViewList never gets called either...?");
    return (
      <li className={"near" + this.props.data.station_name} id={"streetViewNear" + this.props.data.station_name} >
        <img className='streetViewImage' src={this.state.imgUrl} />
      </li>
    );
  }
});

module.exports = StreetViewList;
