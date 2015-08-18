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
    this.neighborhood = this.props.data.neighborhood;


    $('#neighborhoodLabel').empty();
    $('#neighborhoodLabel').append(this.neighborhood);
    // this.svg = d3.select("#neighborhoodLabel").append("svg");
    //
    // this.svg.attr("height", "200px")
    //         .attr('width', '20px')
    //         .attr("fill", "white")
    //
    //
    //   d3.select("svg").append("text")
    //     .attr("transform","rotate(270)")
    //     .attr('height', "200px")
    //     .attr("x", -80)
    //     .attr("y", 15)
    //     .style("font-size", "16px")
    //     .style("font-weight", "100")
    //     .text(this.neighborhood);


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
