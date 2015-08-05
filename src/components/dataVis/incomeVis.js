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
      // axis: {
      //   rotated: true
      // },
      bindto: "#income",
      data: {
        columns: [
          ['Chicago', 47270]
      ],
        type: 'bar'
      },
      color: {
        pattern: [ '#7f7f7f', '#d62728' ]
      },

      bar: {
        width: {
          ratio: 0.5 // this makes bar width 50% of length between ticks
        }
          // or
      // width: 100 // this makes bar width 100px
      }
    });

    setTimeout(function () {
      chart.load({
        columns: [
          [neighborhood, incomeData[neighborhood]],
        ]
      });
    }, 300);

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
