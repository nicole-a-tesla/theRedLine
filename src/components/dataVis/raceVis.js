var React = require('react');
var raceData = require('../raceData');
var ctaStops =  require('../ctaStops');


var RaceVis = React.createClass({

  makeAChart: function() {
    var station_name = this.props.data.station_name;
    var neighborhood = this.props.data.neighborhood;
    var position = this.props.data.position;

    // this doesn't work for going backward....
    var lastNeighborhood = position == 0 ? neighborhood : ctaStops[position - 1]['neighborhood']

    console.log('last one was...');
    console.log(lastNeighborhood);

    var chart = c3.generate({
      size: {
        height: 250,
        width: 400
      },
      bindto: "#race",
      data: {
        columns: [
            raceData[lastNeighborhood][0],
            raceData[lastNeighborhood][1],
            raceData[lastNeighborhood][2],
            raceData[lastNeighborhood][3],
            raceData[lastNeighborhood][4]
            //
            // ['White', 0],
            // ['Black', 0],
            // ['Latin@', 0],
            // ['Asian', 0],
            // ['Other', 0]

            // raceData[neighborhood][0],
            // raceData[neighborhood][1],
            // raceData[neighborhood][2],
            // raceData[neighborhood][3],
            // raceData[neighborhood][4]

        ],
        colors: {
            // pastel
              // 'White': '#75BA85',
              // 'Black': '#B997B1',
              // 'Latin@': '#C3965B',
              // 'Asian': '#68B5B9',
              // 'Other': '#B2BE62'

            // dark
              // 'White': '#334935',
              // 'Black': '#774743',
              // 'Latin@': '#565163',
              // 'Asian': '#64592C',
              // 'Other': '#386960'


              // 'White': '#',
              // 'Black': '#',
              // 'Latin@': '#',
              // 'Asian': '#',
              // 'Other': '#'

            // reds
              'White': '#E53F21',
              'Black': '#DD3B53',
              'Latin@': '#BF5C5C',
              'Asian': '#CB5937',
              'Other': '#C9886F'

            // original
              // 'White': '#1f77b4',
              // 'Black': '#ff7f0e',
              // 'Latin@': '#2ca02c',
              // 'Asian': '#9467bd',
              // 'Other': '#8c564b',
        },
        type : 'donut',

        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      donut: {
        title: this.props.data.neighborhood
      }
    });

    console.log('station_name = ');
    console.log(station_name);
    console.log(raceData['Rogers Park']);


    setTimeout(function () {
      chart.load({
        columns: [
            raceData[neighborhood][0],
            raceData[neighborhood][1],
            raceData[neighborhood][2],
            raceData[neighborhood][3],
            raceData[neighborhood][4]
        ]
      });
    }, 1500);


    // setTimeout(function () {
      // chart.unload({
      //   ids: ''
      // });
      // chart.unload({
      //   ids: ''
      // });
    // }, 2500);
  },

  componentDidMount: function() {
    this.makeAChart();
  },

  componentDidUpdate: function() {
    this.makeAChart();
  },

  render: function() {
    return(
      <div id="race"></div>
    );
  }

});

module.exports = RaceVis;
