'use strict';

var React = require('react');
var $ = require('jquery');

var TrainStop = React.createClass({

  handleClick: function(event) {
    var stopName = '#' + this.props.stopName;

    var trainStationDiv = $(stopName)

    $('html, body').animate({
      scrollLeft: trainStationDiv.offset().left
    }, 1000);

  },

  onScroll: function() {
    var offset = $('#' + this.props.stopName).offset().left;
    var size =  $('#' + this.props.stopName).width();
    var whereTheStationIs = offset - size;

      var stop = Math.round($(window).scrollLeft());

      if (stop > whereTheStationIs) {
        var lastStop = this.props.position - 1;
        var nextStop = this.props.position + 1;

        $('a div#' + lastStop).removeClass('active');
        $('a div#' + nextStop).removeClass('active');

        $('#' + this.props.stopName + 'Menu a div').addClass('active')

      }
  },

  componentDidMount: function() {
    window.addEventListener('scroll', this.onScroll);

    if (this.props.stopName == "Howard") {
      $('#' + this.props.stopName + 'Menu a div').addClass('active');
    }
  },

  render: function() {
    return (
      <li className="trainStop" id={this.props.stopName + "Menu"} onClick={this.handleClick}>
        <a href={"#" + this.props.stopName}>
          <div className="fakeButton" id={this.props.position}>
            {this.props.stopName[0]}
          </div>
        </a>
      </li>
    );
  }
});

module.exports = TrainStop;
