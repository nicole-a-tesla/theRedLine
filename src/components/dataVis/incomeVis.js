var React = require('react');
var incomeData = require('../incomeData')


var IncomeVis = React.createClass({

  makeAChart: function() {
    var chart = c3.generate({
      size: {
        height: 150,
        width: 600
      },
      axis: {
        rotated: true
      },
      bindto: "#income",
      data: {
        columns: [
          ['median income chicago', 47270]
        ],
        type: 'bar'
      },
    bar: {
      width: {
        ratio: 0.4 // this makes bar width 50% of length between ticks
      }
        // or
        // width: 100 // this makes bar width 100px
    }
  });

    setTimeout(function () {
      chart.load({
        columns: [
          ['median income <NEIGHBORHOOD>', 39000],
        ]
      });
    }, 1500);

  },

  componentDidMount: function() {
    this.makeAChart();
  },

  componentDidUpdate: function() {
    this.makeAChart();
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
