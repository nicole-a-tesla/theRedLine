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

  onScroll: function() {
    var offset = $('#' + this.props.stopName).offset().left;
    var size =  $('#' + this.props.stopName).width();
    var whereTheStationIs = offset - size;

    // $(window).on('scroll', function(){

      var stop = Math.round($(window).scrollLeft());

      if (stop > whereTheStationIs) {

        console.log('youve scrolled past' + stop + ', which is where ' + this.props.stopName + ' lives' );
        console.log(this.props.stopName + ' lives at ' + whereTheStationIs);

        $('#' + this.props.stopName + 'Menu a div').addClass('active')

        var lastStop = this.props.position - 1;

        if (lastStop > 0) {
          $('a div#' + lastStop).removeClass('active');
        }
      }
  },

  componentDidMount: function() {
    window.addEventListener('scroll', this.onScroll);
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
