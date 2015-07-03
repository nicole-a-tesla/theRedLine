var React = require('react');
var TrainStopsMenu = require('./trainStuff/trainStopsMenu');
var InstagramContainer = require('./instagramStuff/instagramContainer');
var StreetViewContainer = require('./streetViewStuff/streetViewContainer')
var $ = require('jquery')
var ctaStops =  require('./ctaStops')

var Wrapper = React.createClass({
  loadStops: function() {
    // $.ajax({
    //   url: this.props.url,
    //   dataType: 'json',
    //   cache: false,
    //   success: function(data) {
    //     this.setState({data: data});
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     // console.error(this.props.url, status, err.toString());
    //   }.bind(this)
    // });
    // this.setState({data:ctaStops})
  },

  getInitialState: function() {
    return {data:ctaStops};
  },

  componentDidMount: function() {
    // this.loadStops();
  },

  render: function() {
    return (
      <div id="wrapper">
        <TrainStopsMenu data={this.state.data} />
        <StreetViewContainer data={this.state.data} />
        <InstagramContainer data={this.state.data} />
      </div>
    );
  }
});

module.exports = Wrapper;
