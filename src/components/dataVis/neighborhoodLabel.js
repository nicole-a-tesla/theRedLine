var React = require('react');
var ctaStops =  require('../ctaStops');


var NeighborhoodLabel = React.createClass({

  shouldComponentUpdate: function(nextProps, nextState) {

    if (this.props.data.neighborhood !== nextProps.data.neighborhood) {
      this.lastNeighborhood = this.props.data.neighborhood;
      this.neighborhood = nextProps.data.neighborhood;
    }
    return this.props.data.neighborhood !== nextProps.data.neighborhood;

  },

  appendText: function() {

    if (this.props.data.neighborhood == "Greater Grand Crossing") {
      this.neighborhood = "G. G. Crossing"
    } else {
      this.neighborhood = this.props.data.neighborhood;
    }

    $('#neighborhoodLabel').empty();
    $('#neighborhoodLabel').append('<p>' + this.neighborhood + '</p>');

  },

  componentDidMount: function() {
    this.appendText();
  },

  componentDidUpdate: function() {
    this.appendText();
  },

  render: function() {
    return(
      <div id="neighborhoodLabel"></div>
    );
  }

});

module.exports = NeighborhoodLabel;
