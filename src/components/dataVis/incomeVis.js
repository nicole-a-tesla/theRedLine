var React = require('react');
var incomeData = require('../incomeData')


var IncomeVis = React.createClass({

  render: function() {

    // console.log('INCOME VIS -->');
    // console.log(incomeData[this.props.data.neighborhood]);
    return (
      <div>
        <p>I should have an svg under me!</p>
        <script type="text/javascript">
          var svgW = 100;
          var svgH = 100;
          var padding = 0;

          var dataset = incomeData[this.props.data.neighborhood];

          var svg = d3.select('div')
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
                // return d /10; // React is all kinds of :( about this return
              });
        </script>
      </div>
    )
  }
});

module.exports = IncomeVis;
