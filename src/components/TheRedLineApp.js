'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Wrapper   = require('./wrapper')
var InstructionsModal = require('./instructionsModal')
// CSS
require('normalize.css');
require('../styles/main.css');

var imageURL = require('../images/yeoman.png');

var TheRedLineApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <Wrapper url='/ctaData/parsed_stops.json' />
      </div>
    );
  }
});

module.exports = TheRedLineApp;
