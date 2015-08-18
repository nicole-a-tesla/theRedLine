var React = require('react');
var raceData = require('../raceData');
var ctaStops =  require('../ctaStops');


var RaceVis = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    console.log('shouldComponentUpdate? RACEVIS');
    console.log(this.props.data.neighborhood);
    console.log(nextProps.data.neighborhood);
    console.log(this.props.data.neighborhood !== nextProps.data.neighborhood);

    if (this.props.data.neighborhood !== nextProps.data.neighborhood) {
      this.lastNeighborhood = this.props.data.neighborhood;
      this.neighborhood = nextProps.data.neighborhood;
    }
    return this.props.data.neighborhood !== nextProps.data.neighborhood;

  },

  makeAChart: function() {
    // var station_name = this.props.data.station_name;
    var neighborhood = this.props.data.neighborhood;
    // var position = this.props.data.position;

    this.chart = c3.generate({
      size: {
        height: 250,
        width: 400
      },
      bindto: "#race",
      data: {
        columns: [

            raceData[neighborhood][0],
            raceData[neighborhood][1],
            raceData[neighborhood][2],
            raceData[neighborhood][3],
            raceData[neighborhood][4]

        ],
        colors: {
            // pastel
              // 'White': '#75BA85',
              // 'Black': '#B997B1',
              // 'Latin@': '#C3965B',
              // 'Asian': '#68B5B9',
              // 'Other': '#B2BE62'

            // reds
              // 'White': '#E53F21',
              // 'Black': '#DD3B53',
              // 'Latin@': '#BF5C5C',
              // 'Asian': '#CB5937',
              // 'Other': '#C9886F'

            // original
              'White': '#1f77b4',
              'Black': '#ff7f0e',
              'Latin@': '#2ca02c',
              'Asian': '#9467bd',
              'Other': '#8c564b',
        },
        type : 'donut',

        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      transition: {
        duration: 300
      },
      donut: {
        title: "Demographics"
      }
    });

  },

  componentDidMount: function() {
    this.makeAChart();
  },

  componentDidUpdate: function() {

    this.chart.load({
      columns: [
        raceData[this.neighborhood][0],
        raceData[this.neighborhood][1],
        raceData[this.neighborhood][2],
        raceData[this.neighborhood][3],
        raceData[this.neighborhood][4]
      ]
    });

  },

  render: function() {
    return(
      <div id="race"></div>
    );
  }

});

module.exports = RaceVis;
