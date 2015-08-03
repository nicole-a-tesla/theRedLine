var React = require('react');
var incomeData = require('../incomeData')


var IncomeVis = React.createClass({

  componentDidMount: function() {
    var svgW = 100;
    var svgH = 100;
    var padding = 0;

    var dataset = incomeData[this.props.data.neighborhood];

    var svg = d3.select('#income')
                .append('svg')
                .attr('width', w)
                .attr('height', h);

    svg.selectAll('circle')
        .data(dataset)
        .enter()
        .append('circle')
        .attr('cx', 50)
        .attr('cy', 50)
        .attr('r', function(d) {
          return d; // React is all kinds of sad about this return
        });
  },

  render: function() {
    // console.log('INCOME VIS -->');
    // console.log(incomeData[this.props.data.neighborhood]);
    return (
      <div id="income"></div>
    )
  }
});

module.exports = IncomeVis;
