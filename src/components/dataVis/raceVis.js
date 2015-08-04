var React = require('react');
var raceData = require('../raceData');
var ctaStops =  require('../ctaStops');


var RaceVis = React.createClass({

  makeAChart: function() {
    var station_name = this.props.data.station_name;
    var neighborhood = this.props.data.neighborhood;
    var position = this.props.data.position;

    // this doesn't work for going backward....!!!
    var lastNeighborhood = position == 0 ? neighborhood : ctaStops[position - 1]['neighborhood']

    console.log('last one was...');
    console.log(lastNeighborhood);

    var chart = c3.generate({
      bindto: "#race",
      data: {
        columns: [
            raceData[lastNeighborhood][0],
            raceData[lastNeighborhood][1],
            raceData[lastNeighborhood][2],
            raceData[lastNeighborhood][3],
            raceData[lastNeighborhood][4]
        ],
        type : 'donut',

        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      donut: {
        title: 'title'
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

    setTimeout(function () {
      // chart.unload({
      //   ids: 'Demographics'
      // });
      // chart.unload({
      //   ids: 'data2'
      // });
    }, 2500);
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
