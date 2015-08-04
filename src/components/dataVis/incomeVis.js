var React = require('react');
var incomeData = require('../incomeData')


var IncomeVis = React.createClass({

  makeAChart: function() {
    var chart = c3.generate({
      bindto: "#income",
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 130, 100, 140, 200, 150, 50]
        ],
        type: 'bar'
      },
    bar: {
      width: {
        ratio: 0.5 // this makes bar width 50% of length between ticks
      }
        // or
        //width: 100 // this makes bar width 100px
    }
});

setTimeout(function () {
    chart.load({
        columns: [
            ['data3', 130, -150, 200, 300, -200, 100]
        ]
    });
}, 1000);

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
