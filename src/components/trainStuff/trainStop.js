'use strict';

var React = require('react');
var $ = require('jquery');

var TrainStop = React.createClass({

  handleClick: function(event) {
    var stopName = '#' + this.props.stopName;
    console.log('stopName = ' + stopName);

    var trainStationDiv = $(stopName)

    $('html, body').animate({
      scrollLeft: trainStationDiv.offset().left
    }, 1000);

  },

  render: function() {
    return (
      <li className="trainStop" id={this.props.stopName + "Menu"} onClick={this.handleClick}>
        <a href={"#" + this.props.stopName}>
          <div className="fakeButton">
            {this.props.stopName[0]}
          </div>
        </a>
      </li>
    );
  }
});

module.exports = TrainStop;
