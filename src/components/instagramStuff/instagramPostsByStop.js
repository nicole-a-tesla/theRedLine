var React = require('react');
var InstagramList = require('./instagramList');

// node of everything near a given stop. scroll to this when stop is clicked
var InstagramPostsByStop = React.createClass({
  render: function() {
    var instagramTrainStopNodes = this.props.data.map(function(trainStopData) {
      return (
        <InstagramList data={trainStopData}></InstagramList>
      );
    });

    return (
      <div  id="instagramContainer" >
        <ul className="postsByStop">
          {instagramTrainStopNodes}
        </ul>
      </div>
    );
  }
});

module.exports = InstagramPostsByStop;
