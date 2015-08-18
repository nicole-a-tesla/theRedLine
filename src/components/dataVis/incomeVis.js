var React = require('react');
var incomeData = require('../incomeData')


var IncomeVis = React.createClass({

  shouldComponentUpdate: function(nextProps, nextState) {

    if (this.props.data.neighborhood !== nextProps.data.neighborhood) {
      this.lastNeighborhood = this.props.data.neighborhood;
      this.neighborhood = nextProps.data.neighborhood;
    }
    return this.props.data.neighborhood !== nextProps.data.neighborhood;
  },

  makeAChart: function() {
    this.neighborhood = this.props.data.neighborhood;

    this.chart = c3.generate({
      size: {
        height: 255,
        width: 200
      },

      axis: {
        x: {
          show: false
        },
        y: {
          tick: {
            values: [25000,50000, 75000],
            format: d3.format("$,")
          }
        },
      },

      bindto: "#income",

      data: {
        columns: [
          ['Chicago', 47270],
          ["Here", incomeData[this.neighborhood]]

      ],
        type: 'bar',
        labels: {
          format: d3.format('$,')
        }
      },

      color: {
        pattern: [ '#7f7f7f', '#B81609' ]
      },

      bar: {
        title: this.neighborhood,
        width: {
          ratio: 0.5 // this makes bar width 50% of length between ticks
        }
      },

    tooltip: {
      show: false
    }
  });

  d3.select("svg").append("text")
    .attr("x", 120)
    .attr("y", 15)
    .style("font-size", "12px")
    .style("font-weight", "100")
    .style("text-anchor", "middle")
    .text("Median Income");

  },

  componentDidMount: function() {
    this.makeAChart();
  },

  componentDidUpdate: function() {
    this.chart.load({
      columns: [
        ["Here", incomeData[this.neighborhood]]
      ]
    });

  },

  render: function() {
    return (
      <div id="income"></div>
    )
  }
});

module.exports = IncomeVis;
