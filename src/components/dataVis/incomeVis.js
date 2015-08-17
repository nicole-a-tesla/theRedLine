var React = require('react');
var incomeData = require('../incomeData')


var IncomeVis = React.createClass({

  makeAChart: function() {
    var neighborhood = this.props.data.neighborhood;

    var chart = c3.generate({
      size: {
        height: 250,
        width: 200
      },

      axis: {
        x: {
          show: false
        },
        y: {
          tick: {
            values: [25000,50000, 75000],
            format: d3.format("$")
          }
        },
      },

      bindto: "#income",

      data: {
        columns: [
          ['Chicago', 47270]
      ],
        type: 'bar',
        labels: true
          // format: d3.format('$')
      },

      color: {
        pattern: [ '#7f7f7f', '#d62728' ]
      },

      bar: {
        title: neighborhood,
        width: {
          ratio: 0.5 // this makes bar width 50% of length between ticks
        }
    },
    tooltip: {
      // show: false
      format: {
        title: function (x) { return 'Median Income' }
      }
    }
  });

    setTimeout(function () {
      chart.load({
        columns: [
          [neighborhood, incomeData[neighborhood]]
        ]
      });
    }, 1300);

  },

  componentDidMount: function() {
    this.makeAChart();
  },

  componentDidUpdate: function() {
    this.makeAChart();
  },

  render: function() {
    return (
      <div id="income"></div>
    )
  }
});

module.exports = IncomeVis;
