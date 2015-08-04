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
        height: 240,
        width: 480
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
            raceData[neighborhood][0]
            raceData[neighborhood][1],
            raceData[neighborhood][2],
            raceData[neighborhood][3],
            raceData[neighborhood][4]
        ]
      });
    }, 1500);
    // }, 750);
    // setTimeout(function () {
    //   chart.load({
    //     columns: [
    //         raceData[neighborhood][1]
    //     ]
    //   });
    // }, 1000);
    // setTimeout(function () {
    //   chart.load({
    //     columns: [
    //         raceData[neighborhood][2]
    //     ]
    //   });
    // }, 1250);
    // setTimeout(function () {
    //   chart.load({
    //     columns: [
    //         raceData[neighborhood][3]
    //     ]
    //   });
    // }, 1500);

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
