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
        y: {
            type: 'category',
            tick: {
                culling: {
                    max: 3 // the number of tick texts will be adjusted to less than this value
                }
                // for normal axis, default on
                // for category axis, default off
            }
        }
    },
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
